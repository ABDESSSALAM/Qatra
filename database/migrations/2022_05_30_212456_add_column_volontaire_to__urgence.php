<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnVolontaireToUrgence extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('urgences', function (Blueprint $table) {
            $table->unsignedBigInteger('Volontaire');
            $table->foreign('Volontaire')->references('IdVolontaire')
            ->on('volontaires')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('_urgence', function (Blueprint $table) {
            //
        });
    }
}
