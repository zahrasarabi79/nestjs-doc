//install mapped-type
//npm i --save @nestjs/mapped-types
import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsDto } from './create-events.dto';

export class UpdateEventDto extends PartialType<CreateEventsDto> {}
