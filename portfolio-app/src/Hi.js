import React, { Component } from 'react';
import styles from './Hi.module.scss';

class HiModule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Saransh Gupta"
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className={styles.hi}>
                    <h1>Hi!</h1>
                    <p>My Name is <span surname="Gupta" className={styles.name}>Saransh</span></p>
                    <p>And I am a JavaScript <span job="Ninja" className={styles.ninja}>Ninja</span>.</p>
                </div>
            </>
        );
    }
}

export default HiModule;