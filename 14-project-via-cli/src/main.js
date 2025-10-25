import { createApp } from "vue";
import app from "./App.vue";
import FriendComponent from "./components/FriendComponent.vue";

const application = createApp(app);
application.component("friend-component", FriendComponent);

application.mount("#app");
