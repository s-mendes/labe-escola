class Course {

    constructor (course, description, duration, price) {
        if (price <= 0) {
            throw new Error(`Lançamento inválido: o preço deve ser maior que zero`);
        }
        this.course = course;
        this.description = description;
        this.duration = duration;
        this.price = price;
    }
}