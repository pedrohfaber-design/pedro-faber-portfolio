
type EventCallback = (...args: unknown[]) => void;

class SimpleEventBus {
  private events = new Map<
    string,
    Set<EventCallback>
  >();

  on<T extends unknown[]>(
    event: string,
    callback: (...args: T) => void
  ) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event)!.add(
      callback as unknown as EventCallback
    );
  }

  off<T extends unknown[]>(
    event: string,
    callback: (...args: T) => void
  ) {
    this.events.get(event)?.delete(
      callback as unknown as EventCallback
    );
  }

  emit(event: string, ...args: unknown[]) {
    this.events.get(event)?.forEach(
      (callback) => callback(...args)
    );
  }
}

export const EventBus = new SimpleEventBus();
