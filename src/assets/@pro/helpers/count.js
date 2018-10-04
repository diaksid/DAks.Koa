function PROcount (data) {
  return data.length !== null ? data.length : [].slice.call(data).length
}

export default PROcount
