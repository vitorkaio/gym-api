/* eslint-disable camelcase */
export interface ExerciseInterface {
  number?: number;
  exercise?: string;
  repetitions?: number;
  time?: number;
  obs?: string;
}

export interface TrainingInterface {
  name?: string;
  exercises?: ExerciseInterface[];
  create_at?: Date;
}
