import express, { Request, Response, NextFunction, Application } from "express";

class App {
  private app: Application;
  constructor(private port?: number | string) {
    this.app = express();
    this.configure();
    this.router();
  }

  private configure() {
    this.app.set("port", this.port || 5000);
  }

  private router() {
    this.app.get(
      "/",
      (req: Request, res: Response, next: NextFunction): Response =>
        res.status(200).json({
          code: 200,
          message: 'Ok'
        })
    );
  }

  public run() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is running on port ${this.app.get("port")}`);
    });
  }
}

const app = new App();
app.run();
