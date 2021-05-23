import React from "react";
import {
    Badge,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from "reactstrap";
import { connect } from "react-redux";

class NavbarComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    printSum = () => {
        let tot = 0;
        this.props.products.forEach((item) => {
            if (item.status === "avaiable") {
                tot += 1;
            }
        });
        return tot;
    };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">BeliBeli.com (Inventory)</NavbarBrand>
                    <NavbarToggler onClick={!this.state.isOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Button>
                            Total Product <Badge color="secondary">{this.printSum()}</Badge>
                        </Button>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapToProps = ({ productReducers }) => {
    return {
        products: productReducers.products_list,
    };
};

export default connect(mapToProps)(NavbarComp);
