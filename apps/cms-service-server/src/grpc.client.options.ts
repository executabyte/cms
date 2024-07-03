import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["collection", "record", "user", "image"],
    protoPath: [
      "src/collection/collection.proto",
      "src/record/record.proto",
      "src/user/user.proto",
      "src/image/image.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
