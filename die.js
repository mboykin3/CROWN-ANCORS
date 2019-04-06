class Face {
    constructor(name, value, imageUrl) {
        this._name = name;
        this._value = value;
        this._imageUrl = imageUrl;
}
set name(faceName) {
    this._name = faceName | "Unknown";
}

get name() {
    return this._name;
}

set value(faceValue) {
    if(isNaN(faceValue)) {
        this._value = 0;
    }
    else {
        this._value = faceValue;
    }
}

get value() {
    return this._value;
}

set imagUrl(newImageUrl) {
    this._imageUrl = newImageUrl | "Unknown" 
}