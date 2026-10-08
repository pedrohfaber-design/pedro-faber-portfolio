import { Scene } from "phaser";
import type { Types, Physics } from "phaser";
import { EventBus } from "@/game/events/EventBus";
type GameLanguage = "pt" | "en";

const interactionLabels: Record<
  GameLanguage,
  Record<string, string>
> = {
  pt: {
    projects: "[ E ] VER PROJETOS",
    about: "[ E ] VER PERFIL",
    education: "[ E ] VER EDUCAÇÃO",
    skills: "[ E ] VER HABILIDADES",
    experience: "[ E ] VER EXPERIÊNCIA",
    default: "[ E ] INTERAGIR",
  },
  en: {
    projects: "[ E ] VIEW PROJECTS",
    about: "[ E ] VIEW PROFILE",
    education: "[ E ] VIEW EDUCATION",
    skills: "[ E ] VIEW SKILLS",
    experience: "[ E ] VIEW EXPERIENCE",
    default: "[ E ] INTERACT",
  },
};
export class RoomScene extends Scene {
  private player!: Physics.Arcade.Sprite;
  private currentLanguage: GameLanguage = "pt";
  private cursors!: Types.Input.Keyboard.CursorKeys;
  private wasd!: Record<
    "W" | "A" | "S" | "D",
    Phaser.Input.Keyboard.Key
  >;
  private controlsEnabled = true;
  // Obstáculos reais do cenário
  private obstacles!: Physics.Arcade.StaticGroup;
  // Objetos usados somente para interação
  private interactables: {
    object: Phaser.GameObjects.Rectangle;
    action: string;
  }[] = [];
  private interactionText!: Phaser.GameObjects.Text;
  private interactKey!: Phaser.Input.Keyboard.Key;
  // Saída do quarto
  private exitZone!: Phaser.GameObjects.Zone;
  private endingStarted = false;
  constructor() {
    super("RoomScene");
  }
  // =========================================================
  // PRELOAD
  // =========================================================
  preload() {
    this.load.spritesheet(
      "pedro",
      "/sprites/pedro/pedro-walk.png",
      {
        frameWidth: 64,
        frameHeight: 64,
      }
    );
    this.load.image(
      "room-background",
      "/room/room-background.png"
    );
  }
  // =========================================================
  // CREATE
  // =========================================================
  create() {
    this.cameras.main.setBackgroundColor("#050914");
    // =======================================================
    // BACKGROUND
    // =======================================================
    const savedLanguage =
  window.localStorage.getItem("pedro-faber-language");

this.currentLanguage =
  savedLanguage === "en" ? "en" : "pt";
    const roomBackground = this.add.image(
      480,
      270,
      "room-background"
    );
    roomBackground.setDisplaySize(
      960,
      540
    );
    roomBackground.setDepth(0);
    // =======================================================
    // EVENT BUS
    // =======================================================
    EventBus.on(
      "portfolio-open",
      this.disableControls
    );
    EventBus.on(
      "portfolio-close",
      this.enableControls
    );
    this.events.once("shutdown", () => {
      EventBus.off(
        "portfolio-open",
        this.disableControls
      );
      EventBus.off(
        "portfolio-close",
        this.enableControls
      );
      EventBus.off(
  "ending-finish",
  this.returnToRoom
);
    });
    // Retorno dos créditos para o quarto
EventBus.on(
  "ending-finish",
  this.returnToRoom
);
    // =======================================================
    // OBSTÁCULOS
    // =======================================================
    this.obstacles =
      this.physics.add.staticGroup();
    const createObstacle = (
      x: number,
      y: number,
      width: number,
      height: number
    ) => {
      const obstacle =
        this.add.rectangle(
          x,
          y,
          width,
          height,
          0xff0000,
          0
        );
      obstacle.setVisible(false);
      this.physics.add.existing(
        obstacle,
        true
      );
      this.obstacles.add(
        obstacle
      );
      return obstacle;
    };
    // =======================================================
    // PAREDE SUPERIOR ESQUERDA
    // Espelho / armário / decoração
    // =======================================================
    createObstacle(
      145,
      100,
      105,
      70
    );
    // =======================================================
    // PAREDE INFERIOR DO QUARTO
    // COM ABERTURA PARA A PORTA
    // =======================================================
    /*
     * Esta é a ÚNICA barreira que foi modificada.
     *
     * Antes:
     *
     * ████████████████████████████████████████
     *
     * Agora:
     *
     * ███████████████     ███████████████████
     *                     ↑
     *                   PORTA
     */
    const DOOR_X = 480;
    const DOOR_WIDTH = 70;
    const WALL_LEFT = 70;
    const WALL_RIGHT = 890;
    const WALL_Y = 495;
    const WALL_HEIGHT = 20;
    const doorLeft =
      DOOR_X - DOOR_WIDTH / 2;
    const doorRight =
      DOOR_X + DOOR_WIDTH / 2;
    // Parede esquerda da porta
    const leftWallWidth =
      doorLeft - WALL_LEFT;
    createObstacle(
      WALL_LEFT + leftWallWidth / 2,
      WALL_Y,
      leftWallWidth,
      WALL_HEIGHT
    );
    // Parede direita da porta
    const rightWallWidth =
      WALL_RIGHT - doorRight;
    createObstacle(
      doorRight + rightWallWidth / 2,
      WALL_Y,
      rightWallWidth,
      WALL_HEIGHT
    );
    // =======================================================
    // MÓVEIS ABAIXO DA JANELA
    // =======================================================
    createObstacle(
      365,
      125,
      280,
      45
    );
    // Planta + gaveteiro central
    createObstacle(
      505,
      145,
      120,
      42
    );
    // =======================================================
    // BLOQUEIO SUPERIOR CENTRAL
    // Lixeira / separação antes do setup
    // =======================================================
    createObstacle(
      605,
      150,
      35,
      30
    );
    // =======================================================
    // COMPUTADOR / PROJECTS
    // =======================================================
    createObstacle(
      745,
      150,
      230,
      55
    );
    // =======================================================
    // PAREDE DIREITA
    // =======================================================
    createObstacle(
      875,
      220,
      38,
      125
    );
    createObstacle(
      870,
      320,
      45,
      85
    );
    // =======================================================
    // CAMA
    // =======================================================
    createObstacle(
      155,
      230,
      125,
      115
    );
    // =======================================================
    // EDUCATION / ESTANTES
    // =======================================================
    createObstacle(
      130,
      380,
      110,
      100
    );
    createObstacle(
      220,
      405,
      60,
      75
    );
    // =======================================================
    // SKILLS / BANCADA
    // =======================================================
    createObstacle(
      488,
      400,
      280,
      75
    );
    // =======================================================
    // EXPERIENCE / SERVIDORES
    // =======================================================
    createObstacle(
      730,
      410,
      65,
      80
    );
    createObstacle(
      790,
      410,
      60,
      80
    );
    createObstacle(
      835,
      405,
      45,
      80
    );
    // Equipamentos acima dos racks
    createObstacle(
      770,
      330,
      145,
      42
    );
    // =======================================================
    // ÁREAS DE INTERAÇÃO
    // =======================================================
    const createInteractionArea = (
      x: number,
      y: number,
      width: number,
      height: number,
      action: string
    ) => {
      const area =
        this.add.rectangle(
          x,
          y,
          width,
          height,
          0x22d3ee,
          0
        );
      area.setVisible(false);
      this.interactables.push({
        object: area,
        action,
      });
      return area;
    };
    // ABOUT
    createInteractionArea(
      155,
      150,
      70,
      100,
      "about"
    );
    // PROJECTS
    createInteractionArea(
      720,
      145,
      170,
      75,
      "projects"
    );
    // EDUCATION
    createInteractionArea(
      165,
      390,
      120,
      60,
      "education"
    );
    // SKILLS
    createInteractionArea(
      505,
      405,
      150,
      55,
      "skills"
    );
    // EXPERIENCE
    createInteractionArea(
      790,
      390,
      100,
      120,
      "experience"
    );
    // =======================================================
    // EXIT ZONE
    // =======================================================
    /*
     * NÃO é um interactable.
     *
     * Não existe:
     *
     * [E] SAIR
     *
     * Pedro simplesmente atravessa a porta.
     */
    this.exitZone = this.add.zone(
      DOOR_X,
      515,
      DOOR_WIDTH,
      35
    );
    this.physics.add.existing(
      this.exitZone,
      true
    );
    // =======================================================
    // ANIMAÇÕES
    // =======================================================
    this.anims.create({
      key: "pedro-down",
      frames:
        this.anims.generateFrameNumbers(
          "pedro",
          {
            start: 0,
            end: 3,
          }
        ),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "pedro-up",
      frames:
        this.anims.generateFrameNumbers(
          "pedro",
          {
            start: 4,
            end: 7,
          }
        ),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "pedro-left",
      frames:
        this.anims.generateFrameNumbers(
          "pedro",
          {
            start: 8,
            end: 11,
          }
        ),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: "pedro-right",
      frames:
        this.anims.generateFrameNumbers(
          "pedro",
          {
            start: 12,
            end: 15,
          }
        ),
      frameRate: 8,
      repeat: -1,
    });
    // =======================================================
    // PLAYER
    // =======================================================
    this.player =
      this.physics.add.sprite(
        480,
        270,
        "pedro",
        0
      );
    this.player.setDepth(10);
    this.player.setVisible(true);
    this.player.setAlpha(1);
    this.player.clearTint();
    this.player.setCollideWorldBounds(
      true
    );
    // =======================================================
    // LIMITES DO MUNDO
    // =======================================================
    /*
     * Aumentamos SOMENTE o limite inferior
     * para Pedro conseguir atravessar a porta.
     *
     * As paredes invisíveis continuam protegendo
     * o restante do cenário.
     */
    this.physics.world.setBounds(
      70,
      70,
      820,
      500
    );
    // =======================================================
    // HITBOX DO PEDRO
    // =======================================================
    if (this.player.body) {
      this.player.body.setSize(
        28,
        24
      );
      this.player.body.setOffset(
        18,
        38
      );
    }
    // =======================================================
    // COLISÕES
    // =======================================================
    this.physics.add.collider(
      this.player,
      this.obstacles
    );
    // =======================================================
    // DETECÇÃO AUTOMÁTICA DA SAÍDA
    // =======================================================
    this.physics.add.overlap(
      this.player,
      this.exitZone,
      () => {
        this.startEnding();
      }
    );
    // =======================================================
    // CONTROLES
    // =======================================================
    if (!this.input.keyboard) {
      return;
    }
    this.cursors =
      this.input.keyboard.createCursorKeys();
    this.wasd =
      this.input.keyboard.addKeys({
        W: "W",
        A: "A",
        S: "S",
        D: "D",
      }) as Record<
        "W" | "A" | "S" | "D",
        Phaser.Input.Keyboard.Key
      >;
    this.interactKey =
      this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.E
      );
    // =======================================================
    // TEXTO DE INTERAÇÃO
    // =======================================================
    this.interactionText =
      this.add
        .text(
          480,
          450,
          "[ E ] INTERAGIR",
          {
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#22d3ee",
            backgroundColor: "#020617",
            padding: {
              x: 12,
              y: 8,
            },
          }
        )
        .setOrigin(0.5)
        .setDepth(100)
        .setVisible(false);
    // =======================================================
    // INSTRUÇÕES
    // =======================================================
    this.add
      .text(
        480,
        515,
        this.currentLanguage === "pt"
  ? "WASD / SETAS PARA MOVER"
  : "WASD / ARROWS TO MOVE",
        {
          fontFamily: "monospace",
          fontSize: "14px",
          color: "#22d3ee",
          backgroundColor: "#020617",
          padding: {
            x: 8,
            y: 5,
          },
        }
      )
      .setOrigin(0.5)
      .setDepth(100);
  }
  // =========================================================
  // UPDATE
  // =========================================================
  update() {
    if (!this.player || !this.cursors || !this.wasd) {
      return;
    }
    if (!this.controlsEnabled) {
      this.player.setVelocity(
        0,
        0
      );
      return;
    }
    if (
      !this.player ||
      !this.cursors ||
      !this.wasd
    ) {
      return;
    }
    const speed = 180;
    let velocityX = 0;
    let velocityY = 0;
    let animation = "";
    // =======================================================
    // MOVIMENTO HORIZONTAL
    // =======================================================
    if (
      this.cursors.left.isDown ||
      this.wasd.A.isDown
    ) {
      velocityX = -speed;
      animation = "pedro-left";
    } else if (
      this.cursors.right.isDown ||
      this.wasd.D.isDown
    ) {
      velocityX = speed;
      animation = "pedro-right";
    }
    // =======================================================
    // MOVIMENTO VERTICAL
    // =======================================================
    if (
      this.cursors.up.isDown ||
      this.wasd.W.isDown
    ) {
      velocityY = -speed;
      if (velocityX === 0) {
        animation = "pedro-up";
      }
    } else if (
      this.cursors.down.isDown ||
      this.wasd.S.isDown
    ) {
      velocityY = speed;
      if (velocityX === 0) {
        animation = "pedro-down";
      }
    }
    // =======================================================
    // DIAGONAL
    // =======================================================
    if (
      velocityX !== 0 &&
      velocityY !== 0
    ) {
      const diagonalSpeed =
        speed /
        Math.sqrt(2);
      velocityX =
        velocityX > 0
          ? diagonalSpeed
          : -diagonalSpeed;
      velocityY =
        velocityY > 0
          ? diagonalSpeed
          : -diagonalSpeed;
    }
    this.player.setVelocity(
      velocityX,
      velocityY
    );
    // =======================================================
    // ANIMAÇÃO
    // =======================================================
    if (animation) {
      this.player.anims.play(
        animation,
        true
      );
    } else {
      this.player.setVelocity(
        0,
        0
      );
      if (
        this.player.anims.isPlaying
      ) {
        this.player.anims.stop();
      }
    }
    // =======================================================
    // INTERAÇÃO
    // =======================================================
    let canInteract = false;
    let currentAction:
      | string
      | null = null;
    for (
      const interactable
      of this.interactables
    ) {
      const bounds =
        interactable.object.getBounds();
      const closestX =
        Phaser.Math.Clamp(
          this.player.x,
          bounds.left,
          bounds.right
        );
      const closestY =
        Phaser.Math.Clamp(
          this.player.y,
          bounds.top,
          bounds.bottom
        );
      const distance =
        Phaser.Math.Distance.Between(
          this.player.x,
          this.player.y,
          closestX,
          closestY
        );
      if (distance < 20) {
        canInteract = true;
        currentAction =
          interactable.action;
        break;
      }
    }
    // =======================================================
    // TEXTO DINÂMICO DE INTERAÇÃO
    // =======================================================
    if (canInteract && currentAction) {
  const labels = interactionLabels[this.currentLanguage];

  this.interactionText.setText(
    labels[currentAction] ?? labels.default
  );

  this.interactionText.setVisible(true);
} else {
  this.interactionText.setVisible(false);
}
    // =======================================================
    // ABRIR SEÇÃO
    // =======================================================
    if (
      currentAction &&
      Phaser.Input.Keyboard.JustDown(
        this.interactKey
      )
    ) {
      EventBus.emit(
        "interaction",
        currentAction
      );
    }
  }
  // =========================================================
  // INÍCIO DO FINAL
  // =========================================================
  private startEnding = () => {
    if (this.endingStarted) {
      return;
    }
    this.endingStarted = true;
    this.controlsEnabled = false;
    this.player.setVelocity(
      0,
      0
    );
    this.player.anims.stop();
    this.interactionText.setVisible(
      false
    );
    // Fade para preto
    this.cameras.main.fadeOut(
      1200,
      0,
      0,
      0
    );
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events
        .FADE_OUT_COMPLETE,
      () => {
        /*
         * Por enquanto apenas avisamos o React
         * que o final começou.
         *
         * No próximo passo criaremos os créditos
         * propriamente ditos.
         */
        EventBus.emit(
          "ending-start"
        );
      }
    );
  };
  // =========================================================
  // PAUSA / RETORNO DO PORTFÓLIO
  // =========================================================
private disableControls = () => {
  this.controlsEnabled = false;

  if (!this.player?.active) {
    return;
  }

  this.player.setVelocity(0, 0);
};
  // Retorno ao quarto após a tela de contatos.
  private returnToRoom = () => {
  this.controlsEnabled = false;

  if (!this.player?.active) {
    return;
  }

  this.player.setVelocity(0, 0);
    this.player.anims.stop();
    // Posição inicial segura, distante da porta de saída.
    this.player.body?.reset(480, 270);
    this.player.setFrame(0);
    this.interactionText.setVisible(false);
    // Cancela o fade preto anterior e revela o quarto novamente.
    this.cameras.main.resetFX();
    this.endingStarted = false;
    this.cameras.main.once(
      Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE,
      () => {
        this.controlsEnabled = true;
      }
    );
    this.cameras.main.fadeIn(700, 0, 0, 0);
  };
  private enableControls = () => {
    this.controlsEnabled = true;
  };
}
