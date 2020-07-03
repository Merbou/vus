<template>
  <v-card
    raised
    style="border-radius: 50%;"
    class="mb-2"
    :color="errors_d.length?'red lighten-1':''"
  >
    <v-avatar size="110" class="ma-1">
      <v-img
        @click="launchFilePicker()"
        style="cursor:pointer"
        :src="(url)?url:path"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:default>
          <v-overlay
            :absolute="true"
            :class="{'shadow_upload_avatar:hover':loading,shadow_upload_avatar:!loading}"
            :value="true"
          >
            <v-avatar v-if="loading">
              <v-progress-circular x-large indeterminate color="grey lighten-5"></v-progress-circular>
            </v-avatar>
            <v-tooltip v-else bottom>
              <template v-slot:activator="{ on }">
                <v-icon x-large v-on="on">fas fa-camera-retro</v-icon>
              </template>
              <span v-if="errors_d.length" class="red lighten-1">{{errors_d[0]}}</span>
              <span v-else>{{$t('_setting.change_avatar')}}</span>
            </v-tooltip>
          </v-overlay>
        </template>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular x-large indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <ValidationProvider name="image" rules="mimes:image/jpg,image/png,image/jpeg|size:900">
        <input type="file" ref="avatar" style="display:none" @change="processFile($event,errors)" />
      </ValidationProvider>
    </v-avatar>
  </v-card>
</template>
<script>
import { mimes, size } from "../../validate";
import { ValidationProvider } from "vee-validate";

export default {
  name: "fileForm",
  components: {
    ValidationProvider
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    picture_path: {
      type: String,
      default: "public/root/avatars/man.png"
    },
    errors: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      url: "",
      errors_d: []
    };
  },
  computed: {
    path() {
      let picture_path = this.picture_path
        ? this.picture_path
        : "public/root/avatars/man.png";
      return "/storage/" + picture_path;
    }
  },

  methods: {
    launchFilePicker() {
      this.$refs.avatar.click();
    },
    processFile(event, errors) {
      this.errors_d = [];

      const file = event.target.files[0];

      if (this.getExten(file) === "image") this.url = URL.createObjectURL(file);
      this.$emit("processFile", event.target.files[0]);
    },
    getExten(file) {
      return file.type.split("/")[0];
    }
  },
  watch: {
    errors(val) {
      this.errors_d = val;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.shadow_upload_avatar {
  opacity: 0.1;
}
.shadow_upload_avatar:hover {
  opacity: 1.2;
}
</style>