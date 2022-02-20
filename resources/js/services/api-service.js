import { HTTP } from "@/common/http-common";

export default class ApiService {
    async getUsers() {
        return HTTP.get('/admin/users/all');
    }

    async deleteUser(id) {
        return HTTP.delete(`/admin/users/${id}`);
    }
}
