import React, { Component } from 'react';

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gen: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state };
    this.props.handleAddUser(newUser);
    this.setState({ name: '', email: '', gen: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="mt-4 bg-gray-50 p-4 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label htmlFor="gen" className="block text-gray-700 font-medium">
            Gen:
          </label>
          <input
            type="number"
            name="gen"
            id="gen"
            value={this.state.gen}
            onChange={this.handleChange}
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter generation"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add User
        </button>
      </form>
    );
  }
}

export default UsersForm;
