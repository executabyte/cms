import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Author = "AUTHOR",
    Contributor = "CONTRIBUTOR",
    Subscriber = "SUBSCRIBER",
    Moderator = "MODERATOR",
    Manager = "MANAGER",
    Guest = "GUEST",
    SuperAdmin = "SUPER_ADMIN"
}

registerEnumType(UserRole, {
    name: "UserRole",
  });