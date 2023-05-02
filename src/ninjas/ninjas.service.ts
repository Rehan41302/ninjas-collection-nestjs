import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'Ninja A', weapon: 'stars' },
        { id: 1, name: 'Ninja B', weapon: 'nunchucks' }
    ]

    getNinjas(weapon?: 'starts' | 'nunchucks') {
        if (weapon) {
            return this.ninjas.filter(ninja => ninja.weapon === weapon)
        }

        return this.ninjas
    }

    getOneNinja(id: string) {
        return this.ninjas.find(ninja => ninja.id === +id);
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = { id: this.ninjas.length, ...createNinjaDto }
        this.ninjas.push(newNinja)
        return newNinja
    }

    updateNinja(id: string, updateNinjaDto: UpdateNinjaDto) {
        let ninjaIdx = this.ninjas.findIndex(n => n.id === +id)
        this.ninjas[ninjaIdx] = { ...this.ninjas[ninjaIdx], ...updateNinjaDto }
        return this.ninjas[ninjaIdx]
    }

    removeNinja(id: string) {
        this.ninjas = this.ninjas.filter(n => n.id !== +id)
        return {};
    }
}
