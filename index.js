'use strict';

const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    a() {
        return e(
            'p',
            '',
            'Test'
        );
    }

    b() {
        return e(
            'a',
            '',
            'input'
        )
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return [e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Inscreva-se'
        ), this.a(), this.b()];
    }
}
const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);