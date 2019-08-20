require 'rails_helper'

RSpec.describe Message, type: :model do
  context 'DB Columns' do 
    {
      identifier: :integer,
    }.each do |attribute, type|
      it "should be created with a #{attribute}" do
        is_expected.to have_db_column(attribute).of_type type
      end
    end
  end
  context 'validations' do
    before :each do
      @session = Session.create(title: 'Example Session 1')
      @message = Message.create(session: @session )
    end

    it "should belong to Session" do
      is_expected.to belong_to :session
    end

    it "should have identifier not be nil" do
      expect(@message.identifier).to_not be nil
    end

    it 'should not be valid if identifier not unique' do 
      @not_valied_message = Message.create(identifier: @message.identifier)
      expect(@not_valied_message).not_to be_valid
    end
    it 'should be valid if identifier is unique' do 
      @valid_message = Message.create(session: @session)
      expect(@valid_message).to be_valid
    end
  end
  context 'message create' do 
    before :each do 
      @session = Session.create(title: 'Title')
    end
    it 'should generate a unique random number for Identifier Attribute' do
      @new_message = Message.create(session: @session)
      expect(@new_message).to be_valid
      expect(@new_message.identifier).to be_a_kind_of Integer
    end
  end
end
