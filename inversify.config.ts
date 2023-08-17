import { Container } from "inversify";
import { TYPES } from "./pages/common/types/dependecies-types";
import { SavePostAsDraftUseCase } from "./pages/application/port/in/savePostAsDraftUseCase";
import { SavePostAsDraftService } from "./pages/application/domain/service/savePostAsDraftService";

const myContainer = new Container();
myContainer.bind<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase).to(SavePostAsDraftService);

export { myContainer };