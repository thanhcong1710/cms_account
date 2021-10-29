<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <loader :active="loading.processing" :text="loading.text" />
          <div class="card-header">
            <strong>Thông tin tài khoản </strong>
          </div>
          <div class="card-body">
            <form action method="post">
              <div class="row">
                <div class="col-sm-6">
                  <div class="row no-margin">
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Họ tên  </label>
                      <input
                      disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.name"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email" >Điện thoại  </label>
                      <input
                      disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.phone"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Email  </label>
                      <input
                      disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.email"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="row no-margin">
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Mã Nhân Viên  </label>
                      <input
                        disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.hrm_id"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Mã Quản Lý</label>
                      <input
                        disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.manager_hrm_id"
                      />
                    </div>
                    <div class="form-group col-sm-12">
                      <label for="nf-email">Trung Tâm  </label>
                      <input
                        disabled
                        class="form-control"
                        type="text"
                        name="title"
                        v-model="user_info.branch_name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import u from "../../utilities/utility";
import loader from "../../components/Loading";
import Editor from "@tinymce/tinymce-vue";
import datepicker from "vue2-datepicker";
import moment from 'moment';
import select from 'vue-select'

export default {
  components: {
    loader: loader,
    editor: Editor,
    datepicker,
    "vue-select": select
  },
  name: "Add-Product",
  data() {
    return {
      loading: {
        text: "Đang tải dữ liệu...",
        processing: false,
      },
      user_info:{

      } 
    }
  },
  created() {
    this.loading.processing = true;
    u.g("/api/get_user_info",)
        .then((response) => {
          this.loading.processing = false;
          this.user_info =response.data
        })
        .catch((e) => {
          u.processAuthen(e);
        });
     
  },
  methods: {
    
  },
};
</script>
<style scoped>
.form-control:disabled, .form-control[readonly] {
    background-color: #f7f8fb;
    opacity: 1;
}
</style>