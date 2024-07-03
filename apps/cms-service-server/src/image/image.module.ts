import { Module } from "@nestjs/common";
import { ImageModuleBase } from "./base/image.module.base";
import { ImageService } from "./image.service";
import { ImageController } from "./image.controller";
import { ImageGrpcController } from "./image.grpc.controller";
import { ImageResolver } from "./image.resolver";

@Module({
  imports: [ImageModuleBase],
  controllers: [ImageController, ImageGrpcController],
  providers: [ImageService, ImageResolver],
  exports: [ImageService],
})
export class ImageModule {}
