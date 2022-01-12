import EventHub from "../src/index";

const eventHub = new EventHub();

const fn = () => {
  setTimeout(() => {
    console.log("闹钟响了");
  }, 3000);
};
eventHub.on("闹钟", fn);
eventHub.off("闹钟", fn);
eventHub.emit("闹钟");
