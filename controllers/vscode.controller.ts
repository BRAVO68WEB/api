import { Context } from "hono";

import VSCodeService from "../services/vscode.service";

export default class VSCodeController extends VSCodeService {
    public fetchList = async (ctx: Context) => {
        const data = this.list();
        return ctx.json(data);
    };
}
