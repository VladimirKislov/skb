document.addEventListener('DOMContentLoaded', function () {
  let arrContacts = [];
  const container = document.querySelector('.container');

  //create header
  function createHeader() {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header__container');
    const header = document.createElement('div');
    header.classList.add('header');
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

    header.append(logo);
    header.append(formSearch);
    formSearch.append(input);
    formSearch.append(listSearch);

    return {
      headerContainer,
      header
    }
  }


  //create table
  function createTable() {
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
    thId.classList.add('sort', 'td__id');
    const vector1 = document.createElement('img');
    vector1.classList.add('vector', 'vector1');
    vector1.setAttribute('src', 'img/Vector.png');
    thId.setAttribute('tabindex', '0');
    thId.setAttribute('data-id', '1');
    thId.setAttribute('data-sort', 'id');
    thId.textContent = 'ID';
    const fullName = document.createElement('td');
    fullName.classList.add('sort', 'full__name');
    fullName.textContent = 'Фамилия Имя Отчество';
    const vector2 = document.createElement('img');
    vector2.classList.add('vector', 'vector2');
    vector2.setAttribute('src', 'img/Vector.png');
    const text = document.createElement('div');
    text.classList.add('sort__text');
    text.textContent = 'А-Я';
    fullName.setAttribute('data-id', '1');
    fullName.setAttribute('data-sort', 'surname');
    fullName.setAttribute('tabindex', '0');
    const createData = document.createElement('td');
    createData.classList.add('sort', 'create__data');
    createData.textContent = 'Дата и время создания';
    const vector3 = document.createElement('img');
    vector3.classList.add('vector', 'vector3');
    vector3.setAttribute('src', 'img/Vector.png');
    createData.setAttribute('data-id', '1');
    createData.setAttribute('tabindex', '0');
    createData.setAttribute('data-sort', 'createdAt');
    const change = document.createElement('td');
    change.classList.add('sort', 'change');
    change.textContent = 'Последние изменения';
    const vector4 = document.createElement('img');
    vector4.classList.add('vector', 'vector4');
    vector4.setAttribute('src', 'img/Vector.png');
    change.setAttribute('data-id', '1');
    change.setAttribute('data-sort', 'updatedAt');
    change.setAttribute('tabindex', '0');
    const contact = document.createElement('td');
    contact.classList.add('contact');
    contact.textContent = 'Контакты';
    const action = document.createElement('td');
    action.classList.add('action');
    action.textContent = 'Действия';

    const tableContact = document.createElement('table');
    tableContact.classList.add('table__contact');

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

    return {
      heroContainer,
      hero,
    }
  }


  //create button
  function createButton() {
    const button = document.createElement('button');
    button.classList.add('btn__add-client');
    button.textContent = 'Добавить клиента';
    const img = document.createElement('img');
    img.classList.add('btn__img');
    img.setAttribute('src', 'img/btn.png');

    button.append(img);

    return {
      button,
    }

  }


  //create add-client modal
  function createAddModal() {
    const addClientModal = document.createElement('div');
    addClientModal.classList.add('add__client-modal');
    const wrapperAddModal = document.createElement('div');
    wrapperAddModal.classList.add('modal', 'wrapper__add-modal');
    const newClient = document.createElement('h2');
    newClient.classList.add('new-client__title');
    newClient.textContent = 'Новый клиент';
    const addClientModalForm = document.createElement('form');
    addClientModalForm.classList.add('add__client-form');

    const formFloatingSurname = document.createElement('div');
    formFloatingSurname.classList.add('form-floating');
    const inputSurName = document.createElement('input');
    inputSurName.classList.add('input', 'input__surname');
    inputSurName.setAttribute('id', 'inputSurname');
    const labelSurname = document.createElement('label');
    labelSurname.setAttribute('for', 'inputSurname');
    labelSurname.textContent = 'Фамилия';
    labelSurname.classList.add('label__surname');
    const spanSurName = document.createElement('span');
    spanSurName.classList.add('label-span');
    spanSurName.textContent = '*';

    const formFloatingName = document.createElement('div');
    formFloatingName.classList.add('form-floating');
    const inputName = document.createElement('input');
    inputName.classList.add('input', 'input__name');
    inputName.setAttribute('id', 'inputName');
    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'inputName');
    labelName.classList.add('label__name');
    labelName.textContent = 'Имя';
    const spanName = document.createElement('span');
    spanName.classList.add('label-span');
    spanName.textContent = '*';

    const formFloatingMiddleName = document.createElement('div');
    formFloatingMiddleName.classList.add('form-floating');
    const inputMiddleName = document.createElement('input');
    inputMiddleName.classList.add('input', 'input__middle-name');
    inputMiddleName.setAttribute('id', 'inputMiddleName');
    const labelMiddleName = document.createElement('label');
    labelMiddleName.setAttribute('for', 'inputMiddleName');
    labelMiddleName.classList.add('label__middle-name');
    labelMiddleName.textContent = 'Отчество';

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

    addClientModal.append(wrapperAddModal);
    wrapperAddModal.append(newClient);
    wrapperAddModal.append(addClientModalForm);
    wrapperAddModal.append(wrapperBtn);
    wrapperAddModal.append(addClientClose);
    addClientModalForm.append(formFloatingSurname);
    formFloatingSurname.append(inputSurName);
    formFloatingSurname.append(labelSurname);
    labelSurname.append(spanSurName);

    addClientModalForm.append(formFloatingName);
    formFloatingName.append(inputName);
    formFloatingName.append(labelName);
    labelName.append(spanName);

    addClientModalForm.append(formFloatingMiddleName);
    formFloatingMiddleName.append(inputMiddleName);
    formFloatingMiddleName.append(labelMiddleName);
    addClientModalForm.append(wrapperContact);
    wrapperContact.append(addContactBtn);
    addContactBtn.append(addContactImg);
    wrapperBtn.append(textError);
    wrapperBtn.append(addClientSave);
    wrapperBtn.append(addClientCancel);

    return {
      addClientModal,
    }
  }


  //create delete-client modal
  function createDeleteModal() {
    const deleteClientModal = document.createElement('div');
    deleteClientModal.classList.add('delete__client-modal');
    const wrapperDeleteModal = document.createElement('div');
    wrapperDeleteModal.classList.add('modal', 'wrapper__delete-modal');
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

    deleteClientModal.append(wrapperDeleteModal);
    wrapperDeleteModal.append(deleteClientInfo);
    wrapperDeleteModal.append(deleteClientClose);
    deleteClientInfo.append(deleteClientTitle);
    deleteClientInfo.append(deleteClientP);
    deleteClientInfo.append(deleteClientBtn);
    deleteClientInfo.append(deleteClientCancel);

    return {
      deleteClientModal,
    }
  }

  //create change modal
  function createChange() {
    const changeClientModal = document.createElement('div');
    changeClientModal.classList.add('change__client-modal');
    const wrapperChangeModal = document.createElement('div');
    wrapperChangeModal.classList.add('modal', 'wrapper__change-modal');
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
    const changeContactImg = document.createElement('div');
    changeContactImg.classList.add('img__change-contact');
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

    return {
      changeClientModal,
    }
  }

  function createApp() {
    const { headerContainer, header } = createHeader();
    const { heroContainer, hero } = createTable();
    const { button } = createButton();
    const { addClientModal } = createAddModal();
    const { deleteClientModal } = createDeleteModal();
    const { changeClientModal } = createChange();

    container.append(headerContainer);
    headerContainer.append(header);
    container.append(heroContainer);
    heroContainer.append(hero);
    container.append(button);
    container.append(addClientModal);
    container.append(deleteClientModal);
    container.append(changeClientModal);
  }
  createApp();


  //show modal
  function showAddModal() {
    document.querySelector('.add__client-modal').classList.add('add__client-modal-visible');
    document.querySelector('.add__contact-save').addEventListener('click', function () {
      saveContact();
    })
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
    if (document.querySelector('.wrapper__add-modal').clientHeight > 639) {
      document.querySelector('.wrapper__add-modal').classList.add('show-scroll');
    }
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
      document.querySelector('.wrapper__add-modal').classList.remove('show-scroll');
      if (document.querySelector('.is-close')) {
        document.querySelector('.is-close').remove();
      }
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
  function createChangeDataClient(type, val) {
    const wrapperContact = document.querySelector('.wrapper__contact-change');

    const clientData = document.createElement('div');
    clientData.classList.add('client__data');
    const wrapperSelect = document.createElement('div');
    wrapperSelect.classList.add('wrapper__select');
    const selectData = document.createElement('div');
    selectData.classList.add('select__data');
    selectData.textContent = type;
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
    inputData.value = val;
    const dataBtn = document.createElement('div');
    dataBtn.classList.add('change-data__btn');
    dataBtn.setAttribute('tabindex', '0');
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

    document.querySelectorAll('.change-data__btn').forEach(function (item) {
      item.addEventListener('click', function () {
        item.parentElement.remove();
      })
    })
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

  //show table
  function showTable() {
    document.querySelectorAll('.row').forEach(item => item.remove());
    const data = loadFetchClient();
    data.then(response => {
      if (response.length > 0) {
        createTableData(response);
      } else {
        windowLoad();
      }
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

  //save contact (send in server)
  async function saveContact() {
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
      if (arrayData.length === inputData.length) {
        if (arrayData.includes("")) {
          textError.innerHTML = 'Контакт не заполнен';
          errorContact();
          arrayData = [];
        } else {
          createFetchClient();
          document.querySelectorAll('.row').forEach(item => item.remove());
          showTable();
          const wrapperAdd = document.querySelector('.wrapper__add-modal');
          isClose(wrapperAdd);
          // document.querySelector('.add__client-modal').classList.remove('add__client-modal-visible');
        }
      }
    } else {
      createFetchClient();
      document.querySelectorAll('.row').forEach(item => item.remove());
      showTable();
      const wrapperAdd = document.querySelector('.wrapper__add-modal');
      isClose(wrapperAdd);
      // document.querySelector('.add__client-modal').classList.remove('add__client-modal-visible');
    }
  }

  //request server
  function createDataContacts() {
    document.querySelectorAll('.select__data').forEach(function (elem) {
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
    const dataClient = createDataContacts();
    const id = '';
    fetchClient(id, 'POST', name, surName, middleName, dataClient);
  }

  function createTableData(el) {
    el.forEach(function (e) {
      const container = document.querySelector('.table__contact');

      const tr = document.createElement('tr');
      tr.classList.add('row');
      const idClient = document.createElement('td');
      idClient.classList.add('table__id');
      idClient.setAttribute('data-id', `${e.id}`);
      idClient.textContent = e.id.substr(-6, 13);
      const tdFullName = document.createElement('td');
      tdFullName.classList.add('table__name');
      tdFullName.textContent = `${e.surname} ${e.name} ${e.lastName}`;
      const tdCreated = document.createElement('td');
      tdCreated.classList.add('table__created');
      const createDateYear = e.createdAt;
      let createMonth = createDateYear.substr(5, 2);
      let createDay = createDateYear.substr(8, 2);
      let createYear = createDateYear.substr(0, 4);
      let newCreateDateYear = `${createDay}.${createMonth}.${createYear}`;
      tdCreated.textContent = `${newCreateDateYear} `;
      let createDateTime = e.createdAt.substr(11, 5);
      const tdCreatedTime = document.createElement('span');
      tdCreatedTime.classList.add('time');
      tdCreatedTime.textContent = `${createDateTime}`;
      const tdUpDate = document.createElement('td');
      tdUpDate.classList.add('table__update');
      const upDateYear = e.updatedAt;
      let changeMonth = upDateYear.substr(5, 2);
      let changeDay = upDateYear.substr(8, 2);
      let changeYear = upDateYear.substr(0, 4);
      let newUpDateYear = `${changeDay}.${changeMonth}.${changeYear}`;
      tdUpDate.textContent = `${newUpDateYear} `;
      let upDateTime = e.updatedAt.substr(11, 5);
      const spanTime = document.createElement('span');
      spanTime.classList.add('time');
      spanTime.textContent = `${upDateTime}`;

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
            const arrowTooltipPhone = document.createElement('div');
            arrowTooltipPhone.classList.add('arrow', 'arrow__phone');
            const spanKeyPhone = document.createElement('span');
            spanKeyPhone.classList.add('key', 'phone__key');
            spanKeyPhone.textContent = `Телефон:`;
            const spanValuePhone = document.createElement('a');
            spanValuePhone.classList.add('value', 'phone__value');
            spanValuePhone.setAttribute('href', `tel:${item.value}`);
            spanValuePhone.textContent = `${item.value}`;

            tdContact.append(divPhone);
            divPhone.append(wrapperTooltipPhone);
            divPhone.append(arrowTooltipPhone);
            divPhone.append(imgPhone);
            wrapperTooltipPhone.append(spanKeyPhone);
            wrapperTooltipPhone.append(spanValuePhone);
          }

          if (item.type === 'Email') {
            let divEmail = document.createElement('div');
            divEmail.classList.add('wrapper__icon', 'icon__email');
            const arrowTooltipEmail = document.createElement('div');
            arrowTooltipEmail.classList.add('arrow', 'arrow__email');
            let imgEmail = document.createElement('img');
            imgEmail.classList.add('icon', 'img__email');
            imgEmail.setAttribute('src', 'img/mail.png');

            const wrapperTooltipEmail = document.createElement('div');
            wrapperTooltipEmail.classList.add('tooltip', 'tooltip__mail');
            const spanKeyEmail = document.createElement('span');
            spanKeyEmail.classList.add('key', 'mail__key');
            spanKeyEmail.textContent = `Email:`;
            const spanValueEmail = document.createElement('a');
            spanValueEmail.classList.add('value', 'mail__value');
            spanValueEmail.setAttribute('href', `mailto:${item.value}`);
            spanValueEmail.textContent = `${item.value}`;

            tdContact.append(divEmail);
            divEmail.append(wrapperTooltipEmail);
            divEmail.append(arrowTooltipEmail);
            divEmail.append(imgEmail);
            wrapperTooltipEmail.append(spanKeyEmail);
            wrapperTooltipEmail.append(spanValueEmail);
          }

          if (item.type === 'Facebook') {
            let divFacebook = document.createElement('div');
            divFacebook.classList.add('wrapper__icon', 'icon__fb');
            const arrowTooltipFacebook = document.createElement('div');
            arrowTooltipFacebook.classList.add('arrow', 'arrow__fb');
            let imgFacebook = document.createElement('img');
            imgFacebook.classList.add('icon', 'img__fb');
            imgFacebook.setAttribute('src', 'img/fb.png');

            const wrapperTooltipFacebook = document.createElement('div');
            wrapperTooltipFacebook.classList.add('tooltip', 'tooltip__fb');
            const spanKeyFacebook = document.createElement('span');
            spanKeyFacebook.classList.add('key', 'fb__key');
            spanKeyFacebook.textContent = `Facebook:`;
            const spanValueFacebook = document.createElement('a');
            spanValueFacebook.classList.add('value', 'fb__value');
            spanValueFacebook.setAttribute('href', `http://www.facebook.com/profile.php?id=${item.value}`);
            spanValueFacebook.textContent = `${item.value}`;

            tdContact.append(divFacebook);
            divFacebook.append(wrapperTooltipFacebook);
            divFacebook.append(arrowTooltipFacebook);
            divFacebook.append(imgFacebook);
            wrapperTooltipFacebook.append(spanKeyFacebook);
            wrapperTooltipFacebook.append(spanValueFacebook);
          }

          if (item.type === 'Vk') {
            let divVk = document.createElement('div');
            divVk.classList.add('wrapper__icon', 'icon__vk');
            const arrowTooltipVk = document.createElement('div');
            arrowTooltipVk.classList.add('arrow', 'arrow__vk');
            let imgVk = document.createElement('img');
            imgVk.classList.add('icon', 'img__vk');
            imgVk.setAttribute('src', 'img/vk.png');

            const wrapperTooltipVk = document.createElement('div');
            wrapperTooltipVk.classList.add('tooltip', 'tooltip__vk');
            const spanKeyVk = document.createElement('span');
            spanKeyVk.classList.add('key', 'vk__key');
            spanKeyVk.textContent = `VK:`;
            const spanValueVk = document.createElement('a');
            spanValueVk.classList.add('value', 'vk__value');
            spanValueVk.setAttribute('href', '');
            spanValueVk.textContent = `${item.value}`;

            tdContact.append(divVk);
            divVk.append(wrapperTooltipVk);
            divVk.append(arrowTooltipVk);
            divVk.append(imgVk);
            wrapperTooltipVk.append(spanKeyVk);
            wrapperTooltipVk.append(spanValueVk);
          }

          if (item.type === 'Другое') {
            let divOther = document.createElement('div');
            divOther.classList.add('wrapper__icon', 'icon__other');
            const arrowTooltipOther = document.createElement('div');
            arrowTooltipOther.classList.add('arrow', 'arrow__other');
            let imgOther = document.createElement('img');
            imgOther.classList.add('icon', 'img__other');
            imgOther.setAttribute('src', 'img/other.png');

            const wrapperTooltipOther = document.createElement('div');
            wrapperTooltipOther.classList.add('tooltip', 'tooltip__other');
            const spanKeyOther = document.createElement('span');
            spanKeyOther.classList.add('key', 'other__key');
            spanKeyOther.textContent = `Другое:`;
            const spanValueOther = document.createElement('a');
            spanValueOther.classList.add('value', 'other__value');
            spanValueOther.setAttribute('href', '');
            spanValueOther.textContent = `${item.value}`;

            tdContact.append(divOther);
            divOther.append(wrapperTooltipOther);
            divOther.append(arrowTooltipOther);
            divOther.append(imgOther);
            wrapperTooltipOther.append(spanKeyOther);
            wrapperTooltipOther.append(spanValueOther);
          }
        })
      }
    })
    windowLoad();
    deleteClient();
    document.querySelectorAll('.table__change-btn').forEach(function (element) {
      element.addEventListener('click', function (elem) {
        const id = elem.currentTarget.parentElement.parentElement.childNodes[0].dataset.id;
        createChangeModal(id);
      })
    })
  }

  //create change-client data modal
  function createChangeModal(id) {
    animationChangeClient();

    document.querySelector('.change__client-modal').classList.add('change__client-modal-visible');
    const changeTitleId = document.querySelector('.change__title-id');
    const changeSurName = document.querySelector('.input-change__surname');
    const changeName = document.querySelector('.input-change__name');
    const changeMiddleName = document.querySelector('.input-change__middle-name');


    if (changeTitleId !== '') {
      animationButton();
    }

    window.location.hash = `${id}`;

    document.querySelector('.change__contact-save').classList.remove('load__show');
    document.querySelector('.load__btn').remove();

    const data = loadFetchClient();
    data.then(response => {
      response.forEach(item => {
        if (id === item.id) {
          changeTitleId.textContent = `ID: ${item.id}`;
          changeSurName.value = `${item.surname}`;
          changeName.value = `${item.name}`;
          changeMiddleName.value = `${item.lastName}`;

          const contacts = item.contacts;
          contacts.forEach(e => {
            document.querySelector('.wrapper__contact-change').classList.add('change-wrapper__contact-active');
            createChangeDataClient(e.type, e.value);
            show();
            if (document.querySelector('.wrapper__change-modal').clientHeight > 639) {
              document.querySelector('.wrapper__change-modal').classList.add('show-scroll');
            }
          })
        }
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
        document.querySelector('.wrapper__change-modal').classList.remove('show-scroll');
        document.querySelector('.change__client-modal').classList.remove('change__visible-show');
        document.querySelector('.change__client-modal').classList.remove('change__client-modal-visible');
        document.querySelectorAll('.client__data').forEach(element => element.remove());
        if (!element.target.parentNode.parentNode.querySelector('.client__data')) {
          element.preventDefault();
          document.querySelector('.wrapper__contact-change').classList.remove('change-wrapper__contact-active');
        }

      }
      if (element.target == modal || element.target == cancel || element.target == close) {
        window.location = window.location.href.substr(0, window.location.href.indexOf('#'));
      }
    });

    document.querySelector('.change__contact-btn').addEventListener('click', function () {
      show();
      createChangeDataClient(type = 'Телефон', val = '');
      show();
      document.querySelector('.wrapper__contact-change').classList.add('change-wrapper__contact-active');
    });

  }

  //save change data in server
  document.querySelector('.change__contact-save').addEventListener('click', function (element) {
    const surName = document.querySelector('.input-change__surname').value;
    const name = document.querySelector('.input-change__name').value;
    const middleName = document.querySelector('.input-change__middle-name').value;

    const item = element.target;
    const id = item.parentElement.parentElement.childNodes[0].childNodes[1].textContent.substr(4);

    const dataClient = createDataContacts();
    fetchClient(id, 'PATCH', name, surName, middleName, dataClient);
    const wrapperChange = document.querySelector('.wrapper__change-modal');
    isClose(wrapperChange);
    document.querySelectorAll('.row').forEach(item => item.remove());
    showTable();
    // document.querySelector('.change__client-modal').classList.remove('change__client-modal-visible')
  })

  function fetchClient(id, methods, name, surName, middleName, dataClient) {
    fetch(`http://localhost:3000/api/clients/${id}`, {
      method: `${methods}`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${name}`,
        surname: `${surName}`,
        lastName: `${middleName}`,
        contacts: dataClient,
      })
    })
  }

  //delete data client
  let removeIdClient;

  function deleteFetchContact() {
    fetch(`http://localhost:3000/api/clients/${removeIdClient}`, {
      method: 'DELETE',
    })
  }

  function deleteClient() {
    document.querySelectorAll('.table__remove-btn').forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        modalRemove();
        removeIdClient = e.target.parentElement.parentElement.childNodes[0].dataset.id;

        document.querySelector('.delete__client-modal').addEventListener('click', (element) => {
          const modal = document.querySelector('.delete__client-modal');
          const cancel = document.querySelector('.delete__client-cancel');
          const close = document.querySelector('.delete__client-close');

          if (element.target == modal || element.target == cancel || element.target == close) {
            document.querySelector('.delete__client-modal').classList.remove('delete__visible-show');
            document.querySelector('.delete__client-modal').classList.remove('add__client-modal-visible');
          }
        });
        del();
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
    del();
    // document.querySelector('.delete__client-btn').addEventListener('click', function () {
    //   deleteFetchContact();
    //   const wrapperDelete = document.querySelector('.wrapper__delete-modal');
    //   isClose(wrapperDelete);
    //   document.querySelectorAll('.row').forEach(item => item.remove());
    //   showTable();
    //   document.querySelector('.delete__client-modal').classList.remove('add__client-modal-visible');
    // });
  });

  function del() {
    document.querySelector('.delete__client-btn').addEventListener('click', function () {
      deleteFetchContact();
      const wrapperDelete = document.querySelector('.wrapper__delete-modal');
      isClose(wrapperDelete);
      document.querySelectorAll('.row').forEach(item => item.remove());
      showTable();
      document.querySelector('.delete__client-modal').classList.remove('add__client-modal-visible');
    })
  }


  //search client
  function searchClient() {

    document.querySelector('.header__input').addEventListener('input', function (element) {
      let str = element.currentTarget.value;
      str = str.toUpperCase().substr(0, 1) + str.toLowerCase().substr(1, 9);

      const data = loadFetchClient();

      setTimeout(function () {
        data.then(response => {
          response.forEach(function (element) {
            if (str === element.name || str === element.surname || str === element.lastName) {
              let arr = [];
              if (element.id !== '') {
                document.querySelectorAll('.row').forEach(e => e.remove());

                let res = fetch(`http://localhost:3000/api/clients/${element.id}`);
                res.then(data => {
                  data.json().then(result => {
                    arr.push(result)
                    createTableData(arr);
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
    document.querySelectorAll('.sort').forEach(function (e) {
      e.addEventListener('click', function () {
        let dataElement = e.dataset.sort;
        let arr = [];
        let data = loadFetchClient();
        data.then(response => {
          if (e.dataset.id === '2') {
            e.setAttribute('data-id', '1');
            response.sort(sortId(`${dataElement}`));
            for (i = 0; i < response.length; i++) {
              let set = response[i];
              arr.push(set);
              document.querySelectorAll('.row').forEach(item => item.remove());
              createTableData(arr);
            }
          } else if (e.dataset.id === '1') {
            e.setAttribute('data-id', '2');
            response.sort(sortIdReverse(`${dataElement}`));
            for (i = 0; i < response.length; i++) {
              let set = response[i];
              arr.push(set);
              document.querySelectorAll('.row').forEach(item => item.remove());
              createTableData(arr);
            }
          }
        })
      })
    })
  }
  sortData();

  function sortId(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  function sortIdReverse(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
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

  function floatingLabel() {
    let input = document.querySelectorAll('.input');
    input.forEach(e => {
      e.addEventListener('input', function () {
        if (e.value === "") {
          e.nextSibling.classList.remove('floating__label');
        } else {
          e.nextSibling.classList.add('floating__label');
        }
      })
    })
  }
  floatingLabel();

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
  function linkContact() {

    const data = loadFetchClient();
    data.then(response => {
      response.forEach(function (e) {
        let id = window.location.hash.substr(-13, 13);
        let url = window.location.host;

        if (window.location == `http://${url}/#${e.id}`) {
          createChangeModal(id);
        }
      })
    })
  }
  linkContact();

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

  function isClose(item) {
    const close = document.createElement('div');
    close.classList.add('is-close');
    item.append(close);
  }

  //additionalTaskFive
  let arraySearch = [];

  function searchAutoComplement() {
    const data = loadFetchClient();
    data.then(response => {
      response.forEach(function (e) {
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
    })
  }
  searchAutoComplement();

  function five() {
    document.querySelectorAll('.link').forEach(function (elem) {
      elem.addEventListener('click', function (e) {
        let id = e.currentTarget.innerHTML.substr(-13, 13);
        let table = document.querySelectorAll('.table__id');
        table.forEach(e => {
          if (e.dataset.id === id) {
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
