import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortyByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calanderFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calanderFocused) => {
        this.setState(() => ({ calanderFocused }));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortyByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    render() {
        return (
                <div>
                    <input type="text"  
                        value={this.props.filters.text} 
                        onChange={this.onTextChange} 
                    />
                    <select value={this.props.filters.sortBy} 
                    onChange={this.onSortChange} 
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    <DateRangePicker
                        startDate={this.props.fiters.startDate}
                        endDate={this.props.filters.endDate}
                        ondatesChange={this.onDatesChange}
                        focusedInput={this.state.calanderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRande={() => false}
                    />
                </div>
        );
    }
};

const mapStateToProps = (state) => ({
        filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);