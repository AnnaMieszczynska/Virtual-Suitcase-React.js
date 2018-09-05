import React from 'react';

class Suitcase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='Suitcase'>
            <h1> Let's pack this suitcase! </h1>
            {
                this.props.suitCaseList.map((item, index) => {
                    return (
                        <div key={index}>
                            <p style={{textAlign: 'center'}}>
                                {item}
                            </p>
                            <button className="btnShow">Show</button>
                        </div>

                    )
                })

            }
        </div>
    }

}

export default Suitcase;