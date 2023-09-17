import VSCodeService from "../services/vscode.service";
import { Context } from "hono";

export default class VSCodeController extends VSCodeService {
    public fetchList = async (ctx: Context) => {
        const data = this.list();
        return ctx.json(data);
    };
}
