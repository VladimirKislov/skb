document.addEventListener('DOMContentLoaded', function () {
  let arrContacts = [];

  function createApp() {
    const container = document.querySelector('.container');

    //create header
    const header = document.createElement('div');
    header.classList.add('header');
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header__container');
    const logo = document.createElement('img');
    logo.classList.add('header__logo');
    logo.setAttribute('src', 'img/skb.jpg');
    const formSearch = document.createElement('form');
    formSearch.classList.add('header__form');
    const input = document.createElement('input');
    input.classList.add('header__input');
    input.placeholder = 'Введите запрос';
    const listSearch = document.createElement('ul');
    listSearch.classList.add('list__search');

    container.append(headerContainer);
    headerContainer.append(header);
    header.append(logo);
    header.append(formSearch);
    formSearch.append(input);
    formSearch.append(listSearch);

    //create table
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroContainer = document.createElement('div');
    heroContainer.classList.add('hero__container');
    const title = document.createElement('h1');
    title.classList.add('hero__title');
    title.textContent = 'Клиенты';
    const table = document.createElement('table');
    table.classList.add('hero__table');
    const tr = document.createElement('tr');
    tr.classList.add('tr');
    const thId = document.createElement('td');
    thId.classList.add('td__id');
    const vector1 = document.createElement('img');
    vector1.classList.add('vector', 'vector1');
    vector1.setAttribute('src', 'img/Vector.png');
    thId.setAttribute('tabindex', '0');
    thId.setAttribute('data-id', '1');
    thId.textContent = 'ID';
    const fullName = document.createElement('td');
    fullName.classList.add('full__name');
    fullName.textContent = 'Фамилия Имя Отчество';
    const vector2 = document.createElement('img');
    vector2.classList.add('vector', 'vector2');
    vector2.setAttribute('src', 'img/Vector.png');
    const text = document.createElement('div');
    text.classList.add('sort__text');
    text.textContent = 'А-Я';
    fullName.setAttribute('data-id', '1');
    fullName.setAttribute('tabindex', '0');
    const createData = document.createElement('td');
    createData.classList.add('create__data');
    createData.textContent = 'Дата и время создания';
    const vector3 = document.createElement('img');
    vector3.classList.add('vector', 'vector3');
    vector3.setAttribute('src', 'img/Vector.png');
    createData.setAttribute('data-id', '1');
    createData.setAttribute('tabindex', '0');
    const change = document.createElement('td');
    change.classList.add('change');
    change.textContent = 'Последние изменения';
    const vector4 = document.createElement('img');
    vector4.classList.add('vector', 'vector4');
    vector4.setAttribute('src', 'img/Vector.png');
    change.setAttribute('data-id', '1');
    change.setAttribute('tabindex', '0');
    const contact = document.createElement('td');
    contact.classList.add('contact');
    contact.textContent = 'Контакты';
    const action = document.createElement('td');
    action.classList.add('action');
    action.textContent = 'Действия';

    const tableContact = document.createElement('table');
    tableContact.classList.add('table__contact');

    container.append(heroContainer);
    heroContainer.append(hero);
    hero.append(title);
    hero.append(table);
    hero.append(tableContact);
    table.append(tr);
    tr.append(thId);
    thId.append(vector1);
    tr.append(fullName);
    fullName.append(vector2);
    fullName.append(text);
    tr.append(createData);
    createData.append(vector3);
    tr.append(change);
    change.append(vector4);
    tr.append(contact);
    tr.append(action);

    //create button
    const button = document.createElement('button');
    button.classList.add('btn__add-client');
    button.textContent = 'Добавить клиента';
    const img = document.createElement('img');
    img.classList.add('btn__img');
    img.setAttribute('src', 'img/btn.png');

    container.append(button);
    button.append(img);

    //create add-client modal
    const addClientModal = document.createElement('div');
    addClientModal.classList.add('add__client-modal');
    const wrapperAddModal = document.createElement('div');
    wrapperAddModal.classList.add('wrapper__add-modal');
    const newClient = document.createElement('h2');
    newClient.classList.add('new-client__title');
    newClient.textContent = 'Новый клиент';
    const addClientModalForm = document.createElement('form');
    addClientModalForm.classList.add('add__client-form');
    const inputSurName = document.createElement('input');
    inputSurName.classList.add('input', 'input__surname');
    inputSurName.placeholder = 'Фамилия*';
    const inputName = document.createElement('input');
    inputName.classList.add('input', 'input__name');
    inputName.placeholder = 'Имя*';
    const inputMiddleName = document.createElement('input');
    inputMiddleName.classList.add('input', 'input__middle-name');
    inputMiddleName.placeholder = 'Отчество';
    const wrapperContact = document.createElement('div');
    wrapperContact.classList.add('wrapper__contact');
    const addContactBtn = document.createElement('div');
    addContactBtn.classList.add('add__contact-btn');
    addContactBtn.setAttribute('tabindex', '0');
    addContactBtn.textContent = 'Добавить контакт';
    const addContactImg = document.createElement('div');
    addContactImg.classList.add('img__add-contact');

    const wrapperBtn = document.createElement('div');
    wrapperBtn.classList.add('wrapper__btn');
    const addClientSave = document.createElement('button');
    addClientSave.classList.add('add__contact-save');
    addClientSave.textContent = 'Сохранить';
    const addClientCancel = document.createElement('button');
    addClientCancel.classList.add('add__contact-cancel');
    addClientCancel.textContent = 'Отмена';
    const addClientClose = document.createElement('img');
    addClientClose.classList.add('add__client-close');
    addClientClose.setAttribute('src', 'img/x.png');
    const textError = document.createElement('p');
    textError.classList.add('text-error');

    container.append(addClientModal);
    addClientModal.append(wrapperAddModal);
    wrapperAddModal.append(newClient);
    wrapperAddModal.append(addClientModalForm);
    wrapperAddModal.append(wrapperBtn);
    wrapperAddModal.append(addClientClose);
    addClientModalForm.append(inputSurName);
    addClientModalForm.append(inputName);
    addClientModalForm.append(inputMiddleName);
    addClientModalForm.append(wrapperContact);
    wrapperContact.append(addContactBtn);
    addContactBtn.append(addContactImg);
    wrapperBtn.append(textError);
    wrapperBtn.append(addClientSave);
    wrapperBtn.append(addClientCancel);

    //create delete-client modal
    const deleteClientModal = document.createElement('div');
    deleteClientModal.classList.add('delete__client-modal');
    const wrapperDeleteModal = document.createElement('div');
    wrapperDeleteModal.classList.add('wrapper__delete-modal');
    const deleteClientInfo = document.createElement('div');
    deleteClientInfo.classList.add('delete__client-info');
    const deleteClientClose = document.createElement('img');
    deleteClientClose.classList.add('delete__client-close');
    deleteClientClose.setAttribute('src', 'img/x.png');
    const deleteClientTitle = document.createElement('h2');
    deleteClientTitle.classList.add('delete__client-title');
    deleteClientTitle.textContent = 'Удалить клиента';
    const deleteClientP = document.createElement('p');
    deleteClientP.classList.add('delete__client-p');
    deleteClientP.textContent = 'Вы действительно хотите удалить данного клиента?';
    const deleteClientBtn = document.createElement('button');
    deleteClientBtn.classList.add('delete__client-btn');
    deleteClientBtn.textContent = 'Удалить';
    const deleteClientCancel = document.createElement('button');
    deleteClientCancel.classList.add('delete__client-cancel');
    deleteClientCancel.textContent = 'Отмена';

    container.append(deleteClientModal);
    deleteClientModal.append(wrapperDeleteModal);
    wrapperDeleteModal.append(deleteClientInfo);
    wrapperDeleteModal.append(deleteClientClose);
    deleteClientInfo.append(deleteClientTitle);
    deleteClientInfo.append(deleteClientP);
    deleteClientInfo.append(deleteClientBtn);
    deleteClientInfo.append(deleteClientCancel);

    //create change modal
    const changeClientModal = document.createElement('div');
    changeClientModal.classList.add('change__client-modal');
    const wrapperChangeModal = document.createElement('div');
    wrapperChangeModal.classList.add('wrapper__change-modal');
    const changeClient = document.createElement('h2');
    changeClient.classList.add('change-client__title');
    changeClient.textContent = 'Изменить данные';
    const changeSpan = document.createElement('span');
    changeSpan.classList.add('change__title-id');
    const changeClientModalForm = document.createElement('form');
    changeClientModalForm.classList.add('change__client-form');
    const changeSpanSurName = document.createElement('span');
    changeSpanSurName.classList.add('change-span__surname');
    changeSpanSurName.textContent = 'Фамилия*';
    const changeInputSurName = document.createElement('input');
    changeInputSurName.classList.add('input__change', 'input-change__surname');
    const changeSpanName = document.createElement('span');
    changeSpanName.classList.add('change-span__name');
    changeSpanName.textContent = 'Имя*';
    const changeInputName = document.createElement('input');
    changeInputName.classList.add('input__change', 'input-change__name');
    const changeSpanMiddleName = document.createElement('span');
    changeSpanMiddleName.classList.add('change-span__middle-name');
    changeSpanMiddleName.textContent = 'Отчество';
    const changeInputMiddleName = document.createElement('input');
    changeInputMiddleName.classList.add('input__change', 'input-change__middle-name');
    const changeWrapperContact = document.createElement('div');
    changeWrapperContact.classList.add('wrapper__contact-change');
    const changeContactBtn = document.createElement('div');
    changeContactBtn.classList.add('change__contact-btn');
    changeContactBtn.textContent = 'Добавить контакт';
    changeContactBtn.setAttribute('tabindex', '0');
    // const changeContactImg = document.createElement('img');
    const changeContactImg = document.createElement('div');
    changeContactImg.classList.add('img__change-contact');
    // changeContactImg.setAttribute('src', 'img/addClientBtn.png');
    const changeWrapperBtn = document.createElement('div');
    changeWrapperBtn.classList.add('change-wrapper__btn');
    const changeClientSave = document.createElement('button');
    changeClientSave.classList.add('change__contact-save');
    changeClientSave.textContent = 'Сохранить';
    const changeClientCancel = document.createElement('button');
    changeClientCancel.classList.add('change__contact-remove');
    changeClientCancel.textContent = 'Удалить клиента';
    const changeClientClose = document.createElement('img');
    changeClientClose.classList.add('change__client-close');
    changeClientClose.setAttribute('src', 'img/x.png')

    container.append(changeClientModal);
    changeClientModal.append(wrapperChangeModal);
    wrapperChangeModal.append(changeClient);
    changeClient.append(changeSpan);

    wrapperChangeModal.append(changeClientModalForm);
    wrapperChangeModal.append(changeWrapperBtn);
    wrapperChangeModal.append(changeClientClose);
    changeClientModalForm.append(changeSpanSurName);
    changeClientModalForm.append(changeInputSurName);
    changeClientModalForm.append(changeSpanName);
    changeClientModalForm.append(changeInputName);
    changeClientModalForm.append(changeSpanMiddleName);
    changeClientModalForm.append(changeInputMiddleName);
    changeClientModalForm.append(changeWrapperContact);
    changeWrapperContact.append(changeContactBtn);
    changeContactBtn.append(changeContactImg);
    changeWrapperBtn.append(changeClientSave);
    changeWrapperBtn.append(changeClientCancel);
  }
  createApp();

  //show modal
  function showAddModal() {
    document.querySelector('.add__client-modal').classList.add('add__client-modal-visible');
  }

  document.querySelector('.btn__add-client').addEventListener('click', () => {
    showAddModal();
    animationAddClient();
  });

  document.querySelector('.add__contact-btn').addEventListener('click', function () {
    createDataClient();
    document.querySelector('.wrapper__contact').classList.add('wrapper__contact-active');
    document.querySelectorAll('.data__btn').forEach(function (item) {
      item.addEventListener('click', function () {
        item.parentElement.remove();
      })
    })
    show();
    let btn = document.querySelectorAll('.client__data');
    if (btn.length >= 10) {
      document.querySelector('.add__contact-btn').classList.add('add__contact-btn--show');
    }
  });


  document.querySelector('.add__client-modal').addEventListener('click', (element) => {
    const modal = document.querySelector('.add__client-modal');
    const cancel = document.querySelector('.add__contact-cancel');
    const close = document.querySelector('.add__client-close');
    let error = document.querySelector('.text-error');
    if (element.target === modal || element.target === cancel || element.target === close) {
      document.querySelectorAll('.error-valid').forEach(e => e.classList.remove('error-valid'));
      if (error !== null) {
        error.innerHTML = '';
      }
      document.querySelector('.add__client-modal').classList.remove('visible-show');
      document.querySelectorAll('input').forEach(e => e.value = '');
      document.querySelectorAll('.client__data').forEach(e => e.remove());
      document.querySelector('.add__contact-btn').classList.remove('add__contact-btn--show');
      document.querySelector('.add__client-modal').classList.remove('add__client-modal-visible');
      if (!element.target.parentNode.parentNode.querySelector('.client__data')) {
        document.querySelector('.wrapper__contact').classList.remove('wrapper__contact-active');
      }
    }

  });

  //create data client
  function createDataClient() {
    const wrapperContact = document.querySelector('.wrapper__contact');

    const clientData = document.createElement('div');
    clientData.classList.add('client__data');
    const wrapperSelect = document.createElement('div');
    wrapperSelect.classList.add('wrapper__select');
    const selectData = document.createElement('div');
    selectData.classList.add('select__data');
    selectData.textContent = 'Телефон';
    const dataList = document.createElement('ul');
    dataList.classList.add('data__list');
    const dataItemPhone = document.createElement('li');
    dataItemPhone.classList.add('data__item', 'data-item__phone');
    dataItemPhone.textContent = 'Телефон';
    const dataItemEmail = document.createElement('li');
    dataItemEmail.classList.add('data__item', 'data-item__email');
    dataItemEmail.textContent = 'Email';
    const dataItemFacebook = document.createElement('li');
    dataItemFacebook.classList.add('data__item', 'data-item__facebook');
    dataItemFacebook.textContent = 'Facebook';
    const dataItemVk = document.createElement('li');
    dataItemVk.classList.add('data__item', 'data-item__vk');
    dataItemVk.textContent = 'Vk';
    const dataItemOther = document.createElement('li');
    dataItemOther.classList.add('data__item', 'data-item__other');
    dataItemOther.textContent = 'Другое';
    const inputData = document.createElement('input');
    inputData.classList.add('input__data');
    const dataBtn = document.createElement('div');
    dataBtn.classList.add('data__btn');
    const dataImg = document.createElement('div');
    dataImg.classList.add('data__img');

    wrapperContact.append(clientData);
    clientData.append(selectData);
    clientData.append(dataList);
    dataList.append(dataItemPhone);
    dataList.append(dataItemEmail);
    dataList.append(dataItemFacebook);
    dataList.append(dataItemVk);
    dataList.append(dataItemOther);
    clientData.append(inputData);
    clientData.append(dataBtn);
    dataBtn.append(dataImg);
  }

  //create change data client
  function createChangeDataClient() {
    const wrapperContact = document.querySelector('.wrapper__contact-change');

    const clientData = document.createElement('div');
    clientData.classList.add('client__data');
    const wrapperSelect = document.createElement('div');
    wrapperSelect.classList.add('wrapper__select');
    const selectData = document.createElement('div');
    selectData.classList.add('select__data');
    selectData.textContent = 'Телефон';
    const dataList = document.createElement('ul');
    dataList.classList.add('data__list');
    const dataItemPhone = document.createElement('li');
    dataItemPhone.classList.add('data__item', 'data-item__phone');
    dataItemPhone.textContent = 'Телефон';
    const dataItemEmail = document.createElement('li');
    dataItemEmail.classList.add('data__item', 'data-item__email');
    dataItemEmail.textContent = 'Email';
    const dataItemFacebook = document.createElement('li');
    dataItemFacebook.classList.add('data__item', 'data-item__facebook');
    dataItemFacebook.textContent = 'Facebook';
    const dataItemVk = document.createElement('li');
    dataItemVk.classList.add('data__item', 'data-item__vk');
    dataItemVk.textContent = 'Vk';
    const dataItemOther = document.createElement('li');
    dataItemOther.classList.add('data__item', 'data-item__other');
    dataItemOther.textContent = 'Другое';
    const inputData = document.createElement('input');
    inputData.classList.add('input__data');
    const dataBtn = document.createElement('div');
    dataBtn.classList.add('change-data__btn');
    dataBtn.setAttribute('tabindex', '0');
    const dataImg = document.createElement('div');
    dataImg.classList.add('data__img');
    // dataImg.setAttribute('src', 'img/cancel.png');

    wrapperContact.append(clientData);
    clientData.append(selectData);
    clientData.append(dataList);
    dataList.append(dataItemPhone);
    dataList.append(dataItemEmail);
    dataList.append(dataItemFacebook);
    dataList.append(dataItemVk);
    dataList.append(dataItemOther);
    clientData.append(inputData);
    clientData.append(dataBtn);
    dataBtn.append(dataImg);
  }

  //show select
  function show() {
    document.querySelectorAll(".select__data").forEach(function (elem) {
      elem.addEventListener("click", function () {
        let a = elem.parentElement.querySelector(".data__list");
        a.classList.toggle("data__list-show");
        document.querySelectorAll(".data__list").forEach((element) => {
          if (a != element) {
            element.classList.remove("data__list-show");
          }
        });
        window.addEventListener("click", (e) => {
          let target = e.target;

          if (!target.parentElement.querySelector(".data__list") && !target.parentElement.querySelector(".select__data")) {
            a.classList.remove("data__list-show");
          }
        });
      });
    });

    document.querySelectorAll(".data__item").forEach(function (elem) {
      elem.addEventListener("click", function () {
        let a = elem.parentNode.parentNode.querySelector(".select__data");
        a.textContent = elem.textContent;
      });
    });
  }

  //response server
  async function loadFetchClient() {
    let response = await fetch('http://localhost:3000/api/clients');
    let data = await response.json();
    return data;
  }
  loadFetchClient();

  //show table
  function showTable() {
    const data = loadFetchClient();
    data.then(response => {
      response.forEach(function (elem) {
        createTableData(elem);
      })
      windowLoad();
      createChangeModal();
      deleteClient();
    })
  }
  showTable();

  let arrayData = [];

  function arrayDataInput() {
    document.querySelectorAll('.input__data').forEach(function (e) {
      let inputData = `${e.value}`;
      arrayData.push(inputData);
    })
  }

  //event button save contact (send in server)
  document.querySelector('.add__contact-save').addEventListener('click', function () {
    let inputName = document.querySelector('.input__name');
    let inputSurName = document.querySelector('.input__surname');
    let inputMiddleName = document.querySelector('.input__middle-name');
    let addContact = document.querySelectorAll('.client__data');
    let textError = document.querySelector('.text-error');
    let inputData = document.querySelectorAll('.input__data');
    textError.innerHTML = '';

    if (inputName.value === '' || inputSurName.value === '' || inputMiddleName.value === '') {
      textError.innerHTML = 'Ошибка Не Заполнены поля: ' + '<br/>';
      if (inputSurName.value === '') {
        inputSurName.classList.add('error-valid');
        errorName(inputSurName);
        textError.innerHTML += 'Фамилия*' + '<br/>';
      }

      if (inputName.value === '') {
        inputName.classList.add('error-valid');
        errorName(inputName);
        textError.innerHTML += 'Имя*' + '<br/>';
      }

      if (inputMiddleName.value === '') {
        inputMiddleName.classList.add('error-valid');
        errorName(inputMiddleName);
        textError.innerHTML += 'Отчество' + '<br/>';
      }
    } else if (addContact) {
      arrayDataInput();
      console.log(arrayData);
      if (arrayData.length === inputData.length) {
        if (arrayData.includes("")) {
          textError.innerHTML = 'Контакт не заполнен';
          errorContact();
          arrayData = [];
        } else {
          createFetchClient();
          isClose();
        }
      }
    } else {
      createFetchClient();
      isClose();
    }
  });

  //request server
  function createDataContacts() {
    document.querySelectorAll('.select__data').forEach(function (elem) {
      console.log(elem.parentElement.childNodes[2].value)
      let obj = {
        type: `${elem.textContent}`,
        value: `${elem.parentElement.childNodes[2].value}`
      }
      arrContacts.push(obj);
    })
    return arrContacts;
  }

  function createFetchClient() {
    const surName = document.querySelector('.input__surname').value;
    const name = document.querySelector('.input__name').value;
    const middleName = document.querySelector('.input__middle-name').value;
    let dataClient = createDataContacts();
    setTimeout(function () {
      fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${name}`,
          surname: `${surName}`,
          lastName: `${middleName}`,
          contacts: dataClient,
        })
      })
    }, 5000)
  }

  function createTableData(e) {
    const container = document.querySelector('.table__contact');

    const tr = document.createElement('tr');
    tr.classList.add('row');
    const idClient = document.createElement('td');
    idClient.classList.add('table__id');
    idClient.textContent = e.id;
    const tdFullName = document.createElement('td');
    tdFullName.classList.add('table__name');
    tdFullName.textContent = `${e.surname} ${e.name} ${e.lastName}`;
    const tdCreated = document.createElement('td');
    tdCreated.classList.add('table__created');
    const createDateYear = e.createdAt.substr(0, 10);
    let newCreateDateYear = createDateYear.replace(/-/g, '.');
    const createDateTime = e.createdAt.substr(11, 5);

    const tdCreatedTime = document.createElement('span');
    tdCreatedTime.classList.add('time');
    tdCreated.textContent = `${newCreateDateYear} `;
    tdCreatedTime.textContent = `${createDateTime}`;

    const tdUpDate = document.createElement('td');
    tdUpDate.classList.add('table__update');
    const upDateYear = e.updatedAt.substr(0, 10);
    let newUpDateYear = upDateYear.replace(/-/g, '.');
    const upDateTime = e.updatedAt.substr(11, 5);

    const spanTime = document.createElement('span');
    spanTime.classList.add('time');
    spanTime.textContent = `${upDateTime}`;
    tdUpDate.textContent = `${newUpDateYear} `;

    const tdContact = document.createElement('td');
    tdContact.classList.add('table__contact-client');

    const tdAction = document.createElement('td');
    tdAction.classList.add('table__action');
    const changeBtn = document.createElement('button');
    changeBtn.classList.add('table__change-btn');
    changeBtn.textContent = 'Изменить';
    const tableChangeImg = document.createElement('div');
    tableChangeImg.classList.add('table__change-img', 'change-img');
    tableChangeImg.setAttribute('tabindex', '0');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('table__remove-btn');
    removeBtn.textContent = 'Удалить';
    const tableRemoveBtn = document.createElement('div');
    tableRemoveBtn.classList.add('table__change-img', 'remove-btn');
    tableRemoveBtn.setAttribute('tabindex', '0');

    container.append(tr);
    tr.append(idClient);
    tr.append(tdFullName);
    tr.append(tdCreated);
    tdCreated.append(tdCreatedTime);
    tr.append(tdUpDate);
    tdUpDate.append(spanTime);
    tr.append(tdContact);
    tr.append(tdAction);
    tdAction.append(changeBtn);
    changeBtn.append(tableChangeImg);
    tdAction.append(removeBtn);
    removeBtn.append(tableRemoveBtn);

    if (e.contacts !== '') {
      let icon = e.contacts;
      icon.forEach(function (item) {

        if (item.type === 'Телефон') {
          const divPhone = document.createElement('div');
          divPhone.classList.add('wrapper__icon', 'icon__phone');
          const imgPhone = document.createElement('img');
          imgPhone.classList.add('icon', 'img__phone');
          imgPhone.setAttribute('src', 'img/phone.png');

          const wrapperTooltipPhone = document.createElement('div');
          wrapperTooltipPhone.classList.add('tooltip', 'tooltip__phone');
          const spanKeyPhone = document.createElement('span');
          spanKeyPhone.classList.add('key', 'phone__key');
          spanKeyPhone.textContent = `Телефон:`;
          const spanValuePhone = document.createElement('span');
          spanValuePhone.classList.add('value', 'phone__value');
          spanValuePhone.textContent = `${item.value}`;

          tdContact.append(divPhone);
          divPhone.append(wrapperTooltipPhone);
          divPhone.append(imgPhone);
          wrapperTooltipPhone.append(spanKeyPhone);
          wrapperTooltipPhone.append(spanValuePhone);
        }

        if (item.type === 'Email') {
          let divEmail = document.createElement('div');
          divEmail.classList.add('wrapper__icon', 'icon__email');
          let imgEmail = document.createElement('img');
          imgEmail.classList.add('icon', 'img__email');
          imgEmail.setAttribute('src', 'img/mail.png');

          const wrapperTooltipEmail = document.createElement('div');
          wrapperTooltipEmail.classList.add('tooltip', 'tooltip__mail');
          const spanKeyEmail = document.createElement('span');
          spanKeyEmail.classList.add('key', 'mail__key');
          spanKeyEmail.textContent = `Email:`;
          const spanValueEmail = document.createElement('span');
          spanValueEmail.classList.add('value', 'mail__value');
          spanValueEmail.textContent = `${item.value}`;

          tdContact.append(divEmail);
          divEmail.append(wrapperTooltipEmail);
          divEmail.append(imgEmail);
          wrapperTooltipEmail.append(spanKeyEmail);
          wrapperTooltipEmail.append(spanValueEmail);
        }

        if (item.type === 'Facebook') {
          let divFacebook = document.createElement('div');
          divFacebook.classList.add('wrapper__icon', 'icon__fb');
          let imgFacebook = document.createElement('img');
          imgFacebook.classList.add('icon', 'img__fb');
          imgFacebook.setAttribute('src', 'img/fb.png');

          const wrapperTooltipFacebook = document.createElement('div');
          wrapperTooltipFacebook.classList.add('tooltip', 'tooltip__fb');
          const spanKeyFacebook = document.createElement('span');
          spanKeyFacebook.classList.add('key', 'fb__key');
          spanKeyFacebook.textContent = `Facebook:`;
          const spanValueFacebook = document.createElement('span');
          spanValueFacebook.classList.add('value', 'fb__value');
          spanValueFacebook.textContent = `${item.value}`;

          tdContact.append(divFacebook);
          divFacebook.append(wrapperTooltipFacebook);
          divFacebook.append(imgFacebook);
          wrapperTooltipFacebook.append(spanKeyFacebook);
          wrapperTooltipFacebook.append(spanValueFacebook);
        }

        if (item.type === 'Vk') {
          let divVk = document.createElement('div');
          divVk.classList.add('wrapper__icon', 'icon__vk');
          let imgVk = document.createElement('img');
          imgVk.classList.add('icon', 'img__vk');
          imgVk.setAttribute('src', 'img/vk.png');

          const wrapperTooltipVk = document.createElement('div');
          wrapperTooltipVk.classList.add('tooltip', 'tooltip__vk');
          const spanKeyVk = document.createElement('span');
          spanKeyVk.classList.add('key', 'vk__key');
          spanKeyVk.textContent = `VK:`;
          const spanValueVk = document.createElement('span');
          spanValueVk.classList.add('value', 'vk__value');
          spanValueVk.textContent = `${item.value}`;

          tdContact.append(divVk);
          divVk.append(wrapperTooltipVk);
          divVk.append(imgVk);
          wrapperTooltipVk.append(spanKeyVk);
          wrapperTooltipVk.append(spanValueVk);
        }

        if (item.type === 'Другое') {
          let divOther = document.createElement('div');
          divOther.classList.add('wrapper__icon', 'icon__other');
          let imgOther = document.createElement('img');
          imgOther.classList.add('icon', 'img__other');
          imgOther.setAttribute('src', 'img/other.png');

          const wrapperTooltipOther = document.createElement('div');
          wrapperTooltipOther.classList.add('tooltip', 'tooltip__other');
          const spanKeyOther = document.createElement('span');
          spanKeyOther.classList.add('key', 'other__key');
          spanKeyOther.textContent = `Другое:`;
          const spanValueOther = document.createElement('span');
          spanValueOther.classList.add('value', 'other__value');
          spanValueOther.textContent = `${item.value}`;

          tdContact.append(divOther);
          divOther.append(wrapperTooltipOther);
          divOther.append(imgOther);
          wrapperTooltipOther.append(spanKeyOther);
          wrapperTooltipOther.append(spanValueOther);
        }
      })
    }
  }

  //create change-client data modal(with a five second delay)
  function createChangeModal() {

    document.querySelectorAll('.table__change-btn').forEach(function (element) {
      element.addEventListener('click', function (elem) {
        animationChangeClient();
        document.querySelector('.change__client-modal').classList.add('change__client-modal-visible');
        const changeTitleId = document.querySelector('.change__title-id');
        const changeSurName = document.querySelector('.input-change__surname');
        const changeName = document.querySelector('.input-change__name');
        const changeMiddleName = document.querySelector('.input-change__middle-name');

        const id = elem.target.parentElement.parentElement.childNodes[0].textContent;

        if (changeTitleId !== '') {
          animationButton();
        }

        setTimeout(function () {
          document.querySelector('.change__contact-save').classList.remove('load__show');
          document.querySelector('.load__btn').remove();
          fetch(`http://localhost:3000/api/clients/${id}`)
            .then(response => {
              response.json().then(data => {
                let q = data.contacts;
                document.querySelector('.wrapper__contact-change').classList.add('change-wrapper__contact-active');

                changeTitleId.textContent = `ID: ${data.id}`;
                changeSurName.value = `${data.surname}`;
                changeName.value = `${data.name}`;
                changeMiddleName.value = `${data.lastName}`;

                if (q.length > 0) {
                  document.querySelector('.wrapper__contact-change').classList.add('change-wrapper__contact-active');
                  for (i = 0; i < q.length; i++) {
                    createChangeDataClient();
                    document.querySelectorAll('.change-data__btn').forEach(function (item) {
                      item.addEventListener('click', function () {
                        item.parentElement.remove();
                      })
                    })
                    if (q[i].value === '') {
                      return
                    } else {
                      document.querySelectorAll('.select__data')[i].textContent = q[i].type;
                      document.querySelectorAll('.input__data')[i].value = `${q[i].value}`;
                    }
                  }
                }
                show();
              })
            })
        }, 3000)
      })
    })

    document.querySelector('.change__client-modal').addEventListener('click', (element) => {
      const modal = document.querySelector('.change__client-modal');
      const cancel = document.querySelector('.change__contact-cancel');
      const close = document.querySelector('.change__client-close');
      const removeButton = document.querySelector('.change__contact-remove');
      if (element.target == modal || element.target == cancel || element.target == close || element.target == removeButton) {
        document.querySelector('.input-change__surname').value = '';
        document.querySelector('.input-change__name').value = '';
        document.querySelector('.input-change__middle-name').value = '';
        document.querySelector('.change__client-modal').classList.remove('change__visible-show');
        document.querySelector('.change__client-modal').classList.remove('change__client-modal-visible');
        document.querySelectorAll('.client__data').forEach(element => element.remove());
        if (!element.target.parentNode.parentNode.querySelector('.client__data')) {
          document.querySelector('.wrapper__contact-change').classList.remove('change-wrapper__contact-active');
        }
      }
    });

    document.querySelector('.change__contact-btn').addEventListener('click', function (e) {
      show();
      createChangeDataClient();
      show();
      document.querySelector('.wrapper__contact-change').classList.add('change-wrapper__contact-active');
      document.querySelectorAll('.change-data__btn').forEach(function (item) {
        item.addEventListener('click', function () {
          item.parentElement.remove();
        })
      })
    });
  }

  //save change data in server
  document.querySelector('.change__contact-save').addEventListener('click', function (element) {
    const surName = document.querySelector('.input-change__surname').value;
    const name = document.querySelector('.input-change__name').value;
    const middleName = document.querySelector('.input-change__middle-name').value;

    const item = element.target;
    const id = item.parentElement.parentElement.childNodes[0].childNodes[1].textContent.substr(4);

    isClose();

    const dataClient = createDataContacts();
    setTimeout(function () {
      fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${name}`,
          surname: `${surName}`,
          lastName: `${middleName}`,
          contacts: dataClient,
        })
      })
    }, 3000)
  })

  //delete data client
  let removeIdClient;

  function deleteClient() {
    document.querySelectorAll('.table__remove-btn').forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        modalRemove();
        removeIdClient = e.target.parentElement.parentElement.childNodes[0].textContent;

        document.querySelector('.delete__client-modal').addEventListener('click', (element) => {
          const modal = document.querySelector('.delete__client-modal');
          const cancel = document.querySelector('.delete__client-cancel');
          const close = document.querySelector('.delete__client-close');

          if (element.target == modal || element.target == cancel || element.target == close) {
            document.querySelector('.delete__client-modal').classList.remove('delete__visible-show');
            document.querySelector('.delete__client-modal').classList.remove('add__client-modal-visible');
          }
        });
      })
    })

    document.querySelector('.delete__client-btn').addEventListener('click', function () {
      fetch(`http://localhost:3000/api/clients/${removeIdClient}`, {
        method: 'DELETE',
      })
    })
  }

  function modalRemove() {
    document.querySelector('.delete__client-modal').classList.add('add__client-modal-visible');
    animationDeleteClient();
  }

  document.querySelector('.change__contact-remove').addEventListener('click', item => {
    modalRemove();
    let str = item.target.parentElement.parentElement.childNodes[0].textContent;
    removeIdClient = str.replace(/[^\d]/g, '');

    document.querySelector('.delete__client-modal').addEventListener('click', (element) => {
      const modal = document.querySelector('.delete__client-modal');
      const cancel = document.querySelector('.delete__client-cancel');
      const close = document.querySelector('.delete__client-close');

      if (element.target === modal || element.target === cancel || element.target === close) {
        document.querySelector('.delete__client-modal').classList.remove('add__client-modal-visible');
      }
    });

    document.querySelector('.delete__client-btn').addEventListener('click', function () {
      fetch(`http://localhost:3000/api/clients/${removeIdClient}`, {
        method: 'DELETE',
      })
    });
  });

  //search client
  function searchClient() {

    document.querySelector('.header__input').addEventListener('input', function (element) {
      let str = element.currentTarget.value;
      str = str.toUpperCase().substr(0, 1) + str.toLowerCase().substr(1, 9)

      const data = loadFetchClient();

      setTimeout(function () {
        data.then(response => {
          response.forEach(function (element) {
            if (str === element.name || str === element.surname || str === element.lastName) {
              if (element.id !== '') {
                document.querySelectorAll('.row').forEach(e => e.remove());

                let res = fetch(`http://localhost:3000/api/clients/${element.id}`);
                res.then(data => {
                  data.json().then(result => {
                    createTableData(result);
                  })
                });
              }
            }
          })
        })
      }, 300);

      if (str === '' || str !== element.name || str !== element.surname || str !== element.lastName) {
        document.querySelectorAll('.row').forEach((e) => e.remove());
        showTable();
      }
    })
  }
  searchClient();

  //sort table
  function sortData() {
    document.querySelector('.td__id').addEventListener('click', function (e) {
      const dataIdAttribute = document.querySelector('.td__id');

      let data = loadFetchClient();
      data.then(response => {

        if (dataIdAttribute.dataset.id == 2) {
          dataIdAttribute.setAttribute('data-id', '1');
          let arraySort = sortId(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        } else if (dataIdAttribute.dataset.id == 1) {
          dataIdAttribute.setAttribute('data-id', '2');
          let arraySort = sortIdReverse(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        }
        createChangeModal();
        deleteClient();
      })
    })

    document.querySelector('.full__name').addEventListener('click', function (e) {
      const dataNameAttribute = document.querySelector('.full__name');

      let data = loadFetchClient();
      data.then(response => {

        if (dataNameAttribute.dataset.id == 1) {
          dataNameAttribute.setAttribute('data-id', '2');
          let arraySort = sortName(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        } else if (dataNameAttribute.dataset.id == 2) {
          dataNameAttribute.setAttribute('data-id', '1');
          let arraySort = sortNameReverse(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        }
        createChangeModal();
        deleteClient();
      })
    })

    document.querySelector('.create__data').addEventListener('click', function (e) {
      const dataCreateAttribute = document.querySelector('.create__data');

      let data = loadFetchClient();
      data.then(response => {

        if (dataCreateAttribute.dataset.id == 1) {
          dataCreateAttribute.setAttribute('data-id', '2');
          let arraySort = sortCreateData(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        } else if (dataCreateAttribute.dataset.id == 2) {
          dataCreateAttribute.setAttribute('data-id', '1');
          let arraySort = sortCreateDataReverse(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        }
        createChangeModal();
        deleteClient();
      })
    })

    document.querySelector('.change').addEventListener('click', function (e) {
      const dataChangeAttribute = document.querySelector('.change');

      let data = loadFetchClient();
      data.then(response => {

        if (dataChangeAttribute.dataset.id == 1) {
          dataChangeAttribute.setAttribute('data-id', '2');
          let arraySort = sortChangeData(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        } else if (dataChangeAttribute.dataset.id == 2) {
          dataChangeAttribute.setAttribute('data-id', '1');
          let arraySort = sortChangeDataReverse(response);
          document.querySelectorAll('.row').forEach(e => e.remove());
          for (i = 0; i < arraySort.length; i++) {
            let set = arraySort[i];
            createTableData(set);
          }
        }
        createChangeModal();
        deleteClient();
      })
    })
  }
  sortData();

  function sortId(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => a.id > b.id ? 1 : -1);
    return temp;
  }

  function sortIdReverse(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => a.id < b.id ? 1 : -1);
    return temp;
  }

  function sortName(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => a.surname > b.surname ? 1 : -1);
    return temp;
  }

  function sortNameReverse(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => a.surname < b.surname ? 1 : -1);
    return temp;
  }

  function sortCreateData(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1);
    return temp;
  }

  function sortCreateDataReverse(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1);
    return temp;
  }

  function sortChangeData(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => new Date(a.updatedAt) > new Date(b.updatedAt) ? 1 : -1);
    return temp;
  }

  function sortChangeDataReverse(item) {
    const temp = JSON.parse(JSON.stringify(item));
    temp.sort((a, b) => new Date(a.updatedAt) < new Date(b.updatedAt) ? 1 : -1);
    return temp;
  }

  document.querySelectorAll("td").forEach(function (elem) {
    elem.addEventListener("click", function () {
      let a = elem.childNodes[1];
      a.classList.toggle("active");
      document.querySelectorAll(".vector").forEach((element) => {
        if (a != element) {
          element.classList.remove("active");
        }
      });
    });
  });

  //windowLoad
  function windowLoad() {
    let wrapper = document.querySelector('.table__contact');
    if (wrapper.children.length <= 0) {
      let load = document.createElement('img');
      load.classList.add('load');
      load.setAttribute('src', 'img/load.png');
      wrapper.append(load);
    }
  }

  //additionalTaskOne
  function animationAddClient() {
    setTimeout(function () {
      document.querySelector('.add__client-modal').classList.add('visible-show');
    }, 100)
  }

  function animationChangeClient() {
    setTimeout(function () {
      document.querySelector('.change__client-modal').classList.add('change__visible-show');
    }, 100)
  }

  function animationDeleteClient() {
    setTimeout(function () {
      document.querySelector('.delete__client-modal').classList.add('delete__visible-show');
    }, 100)
  }

  //additionalTaskTwo

  //additionalTaskThree
  function errorName(element) {
    const textError = document.querySelector('.text-error');
    element.addEventListener('input', function () {
      element.classList.remove('error-valid');
      textError.innerHTML = textError.innerHTML.replace(`${element.placeholder}`, '');
      let inputName = document.querySelector('.input__name');
      let inputSurName = document.querySelector('.input__surname');
      let inputMiddleName = document.querySelector('.input__middle-name');
      if (inputName.value !== '' && inputSurName.value !== '' && inputMiddleName.value !== '') {
        document.querySelector('.text-error').innerHTML = '';
      }
    })
  }

  function errorContact() {
    const textError = document.querySelector('.text-error');
    const inputData = document.querySelectorAll('.input__data');
    inputData.forEach(function (e) {
      e.addEventListener('input', () => {
        if (e.value != '') {
          textError.innerHTML = textError.innerHTML.replace('Контакт не заполнен', '');
        }
      })
    })
  }

  //additionalTaskFour
  function animationButton() {
    const btn = document.querySelector('.change__contact-save');
    let load = document.createElement('img');
    load.classList.add('load__btn');
    load.setAttribute('src', 'img/load2.png');
    btn.append(load);
  }

  function isClose() {
    const wrapper = document.querySelector('.container');
    const close = document.createElement('div');
    close.classList.add('is-close');
    wrapper.append(close);
  }

  //additionalTaskFive
  let arraySearch = [];

  async function searchAutoComplement() {
    let response = await fetch(`http://localhost:3000/api/clients`);
    let data = await response.json();

    data.forEach(function (e) {
      let client = e.surname + ' ' + e.name + ' ' + e.id;
      arraySearch.push(client.toLowerCase());
    })

    const input = document.querySelector('.header__input');
    const list = document.querySelector('.list__search');

    const getMatch = (toMatch, arraySearch) =>
      arraySearch.filter((tag) => tag.includes(toMatch.toLowerCase()));

    input.addEventListener('input', function () {
      list.innerHTML = '';
      if (input.value !== '') {
        getMatch(input.value, arraySearch).forEach((match) => {
          const item = document.createElement('li');
          item.classList.add('item');
          const link = document.createElement('a');
          link.classList.add('link');
          item.setAttribute('tabindex', '0');
          list.append(item);
          item.append(link);

          link.textContent = match;

          five();
        });
      }
    })

  }
  searchAutoComplement();

  function five() {
    document.querySelectorAll('.link').forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        let id = e.currentTarget.innerHTML.substr(-13, 13);
        let table = document.querySelectorAll('.table__id');
        table.forEach(e => {
          if (e.innerHTML === id) {
            e.parentElement.style.border = '1px solid red';
            e.parentElement.style.backgroundColor = 'green';

            let btn = document.querySelectorAll('.item');
            let wrapper = document.querySelectorAll('.table__id');
            btn.forEach(element => {
              element.addEventListener('click', function () {
                wrapper.forEach(() => {
                  e.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
              })
            })
          }
        })
      })
    })
  }



});
