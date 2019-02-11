let initialState = {
  model: null,
  models: [],
  records: [],
  schemas: {},
  record: {}
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "MODEL":
      return { ...state, model: payload };

    case "SCHEMA":
      return {
        ...state,
        schemas: { ...state.schemas, [payload.model]: payload.schema }
      };

    case "MODELS":
      return { ...state, models: payload };

    case "RECORDS":
      return { ...state, records: payload };

    case "CLEAR":
      return state;

    case "RECORD":
      return { ...state, record: payload };

    case "POST":
      return { ...state, records: [...state.records, payload.record] };

    case "PUT":
      let updatedRecords = state.records.map(record =>
        record._id === payload.record._id ? payload.record : record
      );
      return { ...state, records: updatedRecords };

    case "DELETE":
      let filteredRecords = state.records.filter(
        record => record._id !== payload.id
      );
      return { ...state, records: filteredRecords };

    default:
      return state;
  }
};
