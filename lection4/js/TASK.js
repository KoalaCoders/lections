class Data {
    constructor(enityName) {
        this.name = enityName;
    }
    formData(data = `${this.name} has no data`){
        return {
            name: this.name,
            data: [data]
        }
    }
    parseData(object){
        let data;

        if (object && object.name === this.name) {
            data = object.data;
            data = Array.isArray(data) ? data : [data];

            if (!this.oldData || this.checker(data)) {
                this.oldData = data;
                return data;
            }
        }
        return null;
    }
    checker(data) {
        let oldData = this.oldData;

        if (oldData && data && oldData.length > 0
            && oldData.length === data.length) {
            for (let i = 0, length = oldData.length; i < length; i++)
                if (data[i] === oldData[i])
                    return false;

            return true;
        } else return false;
    }
}

let ourGreatObject = new Data('Computer');

ourGreatObject.formData(); // Computer has no data
ourGreatObject.formData('music'); // {name: 'Computer', data: ['music']}

