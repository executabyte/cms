import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecordService } from "./record.service";
import { RecordGrpcControllerBase } from "./base/record.grpc.controller.base";

@swagger.ApiTags("records")
@common.Controller("records")
export class RecordGrpcController extends RecordGrpcControllerBase {
  constructor(protected readonly service: RecordService) {
    super(service);
  }
}
