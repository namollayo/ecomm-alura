import mongoose from 'mongoose';
import { describe, expect, it, jest } from '@jest/globals'; 
import { categories } from '../../src/models/Category'

describe('Test the categories\' model', () => {
    const objectToTest = {
        name: 'ART TOOLS',
        status: 'ACTIVE'
    }

    it('Should instance a new category', () => {
        const category = new categories(objectToTest);

        expect(category).toEqual(
            expect.objectContaining(objectToTest)
        )

    })

    it('Should save category in database', async () => {
        const category = new categories(objectToTest)
        
        category.save().then((data) => {
            expect(data.name).toBe('ART TOOLS')
            expect(data.status).toBe('ACTIVE')
        })
    })
})