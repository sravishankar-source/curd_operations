const stringifyDate = (Date) => {
    const options = { day: 'numeric', month: 'short', year:'numeric'};
    const newDate = !Date ? "undefined" :
              new Date(Date.parse(Date)).toLoacalstorageString('en-GB', options);
              return newDate;
}