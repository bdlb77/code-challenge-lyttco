require 'rails_helper'

RSpec.describe Message, type: :model do
  context 'DB Columns' do 
    {
      identifier: :integer,
      text: :string,
    }.each do |attribute, type|
      it "should be created with a #{attribute}" do
        is_expected.to have_db_column(attribute).of_type type
      end
    end
  end
  context 'validations' do
    before :each do
      @session = Session.create(title: 'Example Session 1')
      @message = Message.create(identifier: rand(23...23520), text: 'sample text', session: @session )
      @message = Message.create(identifier: 23521, text: 'sample text', session: @session )
    end

    it "should belong to Session" do
      is_expected.to belong_to :session
    end

    %i[text identifier].each do |attribute|
      it "should have #{attribute} present" do
        is_expected.to validate_presence_of attribute
      end
    end
    it 'should not be valid if identifier not unique' do 
      @not_valied_message = Message.create(identifier: 23521, text: 'sample text', session: @session)
      expect(@not_valied_message).not_to be_valid
    end
    it 'should be valid if identifier is unique' do 
      @valid_message = Message.create(identifier: 23522, text: 'sample text', session: @session)
      expect(@valid_message).to be_valid
    end
  end
end
