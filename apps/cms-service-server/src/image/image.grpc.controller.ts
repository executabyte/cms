import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageService } from "./image.service";
import { ImageGrpcControllerBase } from "./base/image.grpc.controller.base";

@swagger.ApiTags("images")
@common.Controller("images")
export class ImageGrpcController extends ImageGrpcControllerBase {
  constructor(protected readonly service: ImageService) {
    super(service);
  }
}
