// declaration to make typescript happy.

declare module "worker-loader?*" {
    class WebpackWorker extends Worker {
      constructor();
    }
  
    export default WebpackWorker;
  }
  