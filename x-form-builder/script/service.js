class Form {
  formArray = [];
  setForm(formArray) {
    this.formArray = formArray;
  }

  setHeader(section, url, position) {
    this.formArray.logo[section].push({ url, position });
  }

  setFooter(section, url, position) {
    this.formArray.logo[section].push({ url, position });
  }
  setFormElements(label, placeholder, type) {
    this.formArray.form.push({ label, placeholder, type });
  }
  setInputElements(label, type) {
    this.formArray.form.push({ label, type });
  }
  setBanner(url) {
    this.formArray.banner.push(url);
    console.log(this.formArray.banner);
  }
}
