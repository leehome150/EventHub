class EventHub {
  private eventMap: { [key: string]: Array<(params?: any) => void> } = {};
  on(eventName: string, fn: (params?: any) => void) {
    this.eventMap[eventName] = this.eventMap[eventName] || [];
    this.eventMap[eventName].push(fn);
  }
  emit(eventName: string) {
    (this.eventMap[eventName] || []).forEach((fn) => fn());
  }
  off(eventName: string, fn: (params?: any) => void) {
    const index = this.eventMap[eventName].findIndex((item) => item === fn);
    if (index === -1) return;
    this.eventMap[eventName].splice(index, 1);
    console.log("取消闹钟成功");
  }
}

export default EventHub;
