<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark :height="size" :width="size" v-bind="attrs" v-on="on">
          <v-avatar color="accent" :size="size" class="title">
            {{ selectedUserInitials }}
          </v-avatar>
        </v-btn>
      </template>

      <v-list dense>
        <v-subheader>Users</v-subheader>
        <v-list-item
          v-for="user in users"
          :key="user.id"
          @click="SetSelectedUserId(user.id)"
        >
          <v-list-item-title>
            {{ user.first_name }} {{ user.last_name }}
          </v-list-item-title>
          <v-list-item-icon>
            <v-btn small icon @click.stop="onDeleteUser(user.id)">
              <v-icon size="20" color="error">mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>

        <v-list-item @click="addUserDialog = true" class="accent" dark>
          <v-list-item-title>
            Add a new user
          </v-list-item-title>
          <v-list-item-icon>
            <v-icon size="20">mdi-plus</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>

    <UserDialogAdd :is-active="addUserDialog" @close="addUserDialog = false" />
    <UserDialogDelete
      :is-active="Boolean(deletingUserId)"
      :user-id="deletingUserId"
      @close="deletingUserId = ''"
    />
  </div>
</template>

<script>
import User from "@/models/User";
import { mapGetters, mapActions } from "vuex";
import UserDialogAdd from "@/components/UserDialogAdd";
import UserDialogDelete from "@/components/UserDialogDelete";

export default {
  components: { UserDialogAdd, UserDialogDelete },
  data() {
    return {
      size: 50,
      addUserDialog: false,
      deletingUserId: ""
    };
  },

  computed: {
    ...mapGetters(["selectedUserId"]),

    users() {
      return User.all();
    },

    selectedUserInitials() {
      const user = User.find(this.selectedUserId) || this.users[0];
      return user.first_name.substr(0, 1) + user.last_name.substr(0, 1);
    }
  },

  methods: {
    ...mapActions(["SetSelectedUserId"]),

    onDeleteUser(id) {
      console.log("onDeleteUser -> id", id);
      this.deletingUserId = id;
    }
  },

  created() {
    this.users && this.SetSelectedUserId(this.users[0].id);
  }
};
</script>
