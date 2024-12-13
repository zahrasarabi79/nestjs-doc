import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventsDto } from './create-events.dto';
import { UpdateEventDto } from './update-event.dto';
import { EventEntity } from './event.entity';

@Controller('/events')
export class EventsController {
  private events: EventEntity[] = [];

  @Get()
  findAll() {
    return this.events;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.events.find((event) => event?.id === parseInt(id));
  }

  @Post()
  create(@Body() body: CreateEventsDto) {
    return this.events.push({
      ...body,
      when: new Date(body.when),
      id: this.events.length + 1,
    });
  }

  @Patch(':id')
  update(@Param('id') id, @Body() updateBody: UpdateEventDto) {
    const updatedItemIndex = this.events.findIndex(
      (event) => event.id === parseInt(id),
    );
    return {
      id: this.events[updatedItemIndex],
      ...updateBody,
      when: updateBody?.when
        ? new Date(updateBody?.when)
        : this.events[updatedItemIndex].when,
    };
  }

  @Delete(':id')
  remove() {}
}
