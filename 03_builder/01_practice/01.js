class CodeBuilder {
  constructor(className) {
    // todo
    this.classData = [];
    this.classData.push(`class ${className} {`);
    this.classData.push(`\n`);
    this.classData.push(`}`);
    this.constructorData = [];
  }

  addField(name) {
    // todo
    // reminder: we want a fluent interface
    this.constructorData.push(name);
    return this;
  }

  toString() {
    // todo
    const indentSize = 2;
    const args = this.constructorData.join(', ');
    const constructorData = [];
    constructorData.push(' '.repeat(indentSize));
    constructorData.push(`constructor(${args}){`);
    constructorData.push(`\n`);

    for (let data of this.constructorData) {
      constructorData.push(' '.repeat(indentSize * 2));
      constructorData.push(`this.${data} = ${data};`);
      constructorData.push(`\n`);
    }

    constructorData.push(' '.repeat(indentSize));
    constructorData.push(`}`);

    const result = [
      this.classData[0],
      `\n`,
      ...constructorData,
      this.classData[1],
      this.classData[2],
    ];

    return result.join('');
  }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());
