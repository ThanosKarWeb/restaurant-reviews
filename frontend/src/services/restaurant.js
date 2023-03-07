import http from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return http.get(`/restaurants?page=${page}`);
  }

  get(id) {
    console.log(id);
    //return http.get(`/restaurant?id=${id}`);
    //return http.get(`/restaurants/id/5eb3d668b31de5d588f4292a`);
    return http.get(`/restaurants/id/${id}`);
  }

  getCuisines(id) {
    return http.get(`/restaurants/cuisines`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`/restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post("/review-new", data);
  }

  updateReview(data) {
    return http.put("/review-edit", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review-delete?id=${id}`, {
      data: { user_id: userId },
    });
  }
}

export default new RestaurantDataService();
