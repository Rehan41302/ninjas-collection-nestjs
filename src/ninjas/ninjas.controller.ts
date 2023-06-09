import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    // Traditional way: const ninjasService = new NinjasService()
    // NestJs way to create instance of the service class.
    // It works because of injectables directive in the service class.
    constructor(private readonly ninjasService: NinjasService) { }

    // GET /ninjas?weapon=some weapon --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'starts' | 'nunchucks') {
        return this.ninjasService.getNinjas(weapon)
    }

    // GET /ninjas/:id --> {...}
    // `:id` is extracted from the route params and passed as the variable `id`
    // id coming from params is string by default
    // ParseIntPipe is a nest pipe that transform string into number
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.ninjasService.getOneNinja(id)
        } catch (error) {
            throw new NotFoundException()
        }
    }

    // POST /ninjas
    // Body extracted from request and matched with `CreateNinjaDto` type
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.createNinja(createNinjaDto)
    }

    // PUT /ninjas/:id --> {...}
    // Body extracted from request and matched with `UpdateNinjaDto` type
    @Put(':id')
    updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
        return this.ninjasService.updateNinja(id, updateNinjaDto)
    }

    // DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id', ParseIntPipe) id: number) {
        return this.ninjasService.removeNinja(id)
    }
}
