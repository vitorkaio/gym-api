/* eslint-disable camelcase */
import { TrainingInterface } from '../training/training.interface'

export interface UserInterface {
  username?: string;
  password?: string;
  info?: {
    name?: string;
  };
  perfil?: string;
  age?: number;
  gender?: string;
  create_at?: Date;
  trainings?: TrainingInterface[];

}
