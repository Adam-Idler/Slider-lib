class OMVP {
    constructor() {
        this.observers = [];
    }

    makeObservableSubject() {
        const addObserver = (obs) => {
                if (typeof obs !== 'function') {
                    throw new Error('observer must be a function');
                }
                for (let i = 0; i < this.observers.length; i++) {
                    let observer = this.observers[i];
                    if (observer === obs) {
                        throw new Error('observer already in the list');
                    }
                }
                this.observers.push(obs);
        };
        const removeObserver = (obs) => {
            for (let i = 0; i < this.observers.length; i++) {
                let observer = this.observers[i];
                if (observer === obs) {
                    this.observers.splice(i, 1);
                    return;
                }
            }
            throw new Error('could not find observer in list of observers');
        };
        const notifyObservers = (data) => {
            const observersSnapshot = this.observers.slice(0);
            for (let i = 0; i < observersSnapshot.length; i++) {
                observersSnapshot[i](data);
            }
        };
        return {
            addObserver: addObserver,
            removeObserver: removeObserver,
            notifyObservers: notifyObservers,
            notify: notifyObservers
        };
    }
}