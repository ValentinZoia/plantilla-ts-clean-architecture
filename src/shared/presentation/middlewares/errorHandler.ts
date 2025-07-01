import { Request, Response, NextFunction } from "express";
import { ValidationError, CustomError } from "../../domain/errors";


export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  
 

  //Error de validacion personalizado
  if (err instanceof ValidationError) {
    res.status(400).json({
      type: "ValidationError",
      statusCode: err.statusCode || 400,
      message: err.message,
      errors: err.errors,
    });
    return;
  }

  if(err instanceof CustomError){
     
    res.status(err.statusCode).json({
      type: err.type || 'CustomError',
      message: err.message,
      statusCode: err.statusCode ,
    })
  }

  

  

  
  // Error general del servidor
  res.status(500).json({
    message: `Error del Servidor`
  });

};
