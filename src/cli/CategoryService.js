import fs from 'fs';

const BASE_URL = 'http://localhost:3000/categories';

export class CategoryService {

    static async findCategories() {
        const response = await fetch(BASE_URL);

        if (response.status >= 400) {
            const res = `${response.status} ${response.statusText}`
            throw new Error(res)
        } 
        console.log('response status:', response.status, '\n', await response.json());
    }

    static async findCategoryById(id) {
        const response = await fetch(`${BASE_URL}/${id}`);
        if (response.status >= 400) {
            const res = `${response.status} ${response.statusText}`
            throw new Error(res)
        } 
        console.log('response status:', response.status, '\n', await response.json());
    }

    static async createCategory(category) {
        const encoding = 'utf-8';
        const content = await fs.promises.readFile(category, encoding);
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: content,
        });

        if (response.status >= 400) {
            const res = `${response.status} ${response.statusText}`
            throw new Error(res)
        } 

        console.log('response status:', response.status, '\n', await response.json());
    }

    static async updateCategory(id, category) {
        const encoding = 'utf-8';
        const content = await fs.promises.readFile(category, encoding);
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: content,
        });

        if (response.status >= 400) {
            const res = `${response.status} ${response.statusText}`
            throw new Error(res)
        } 
        console.log('response status:', response.status, '\n', await response.json());
    }

    static async deleteCategory(id) {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (response.status >= 400) {
            const res = `${response.status} ${response.statusText}`
            throw new Error(res)
        } 
        console.log('response status:', response.status, response.statusText);
    }
}
