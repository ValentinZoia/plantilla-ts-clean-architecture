
import { AppRoutes } from "./shared/presentation/routes";
import { envs } from "./shared/config";
import {Server} from "./server";

(()=> {
  main().catch(async (e) => {
  console.error(e);
  process.exit(1);
});
})()

async function main(){
    new Server({
        port:envs.PORT,
        routes:AppRoutes.routes,
        cors_origin: envs.CORS_ORIGIN,
        node_env:envs.NODE_ENV,
        
    }).start();
}

