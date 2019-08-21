require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  render_views
    describe "Post #create" do 

      it "returns http success" do
        post :create
        expect(response.code).to eq('200')
      end
    end

    describe "GET #show" do
      before :each do
        @session = Session.create(title: 'Session')
        get :show, params: { id: @session.id, format: :json }
      end

      it "correct renders show template" do
        expect(response.code).to eq('200')
      end
    end
    describe "GET #replies" do
      before :each do
        @session = Session.create(title: 'Session')
      end
      
      it "renders empty array if no messages" do
        get :replies, params: { id: @session.id, format: :json, formatted_messages: @formatted_messages }
        response_body = JSON.parse(response.body)
        expect(response.code).to eq('200')
        expect(response_body).to eq([])
      end
      
      it "should render with 2 replies if message" do 
        @message = Message.create(session: @session, detected_language: 'de')
        get :replies, params: { id: @session.id, format: :json, formatted_messages: @formatted_messages }
        response_body = JSON.parse(response.body)
        expect(response.code).to eq('200')
        expect(response_body.count).to eq(2)
      end

      
    end
end
