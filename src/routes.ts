import {UserController} from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/posts",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/posts/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/posts",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/posts/:id",
    controller: UserController,
    action: "remove"
}];
