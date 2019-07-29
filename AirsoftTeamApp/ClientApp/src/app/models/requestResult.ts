import { Component, Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

export class RequestResult {
  public Data: any;
  public Result: RequestResultEnum;
  public Errors : string[];
}

export enum RequestResultEnum {
  Success = 1,
  Error = 2
}

