export default {
    namespace: 'taskInput',
    state: [
        {
            project: 'Project1',
            lastWeek: 'one\ntow',
            nextWeek: ''
        }],
    reducers: {
        addTask: function (state, { payload: task }) {
            return [...state, task];
        }
    }
};